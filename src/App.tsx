import React from "react";
import ReactGA from "react-ga";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import "./App.scss";
import { CardGrid } from "./Card";
import modes, { GetModeById, Mode } from "./DistingModes";

const maxPickModes = 5;

/* When choosing random modes, avoid these less interesting modes. */
const boringTags = ["utility", "playback", "scala", "record", "mix"];

function useGoogleAnalytics() {
  const location = useLocation();

  React.useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID, {});
  }, []);

  React.useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

export default function App(): JSX.Element {
  function SwitchRoutes() {
    useGoogleAnalytics();
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ShowAll} />
          <Route path="/pick/:count" component={RedirectToRandom} />
          <Route path="/show/:modesSpec" component={ShowMultiple} />
          <Route path="/search/:query" component={SearchResults} />
        </Switch>
      </main>
    );
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <SwitchRoutes />
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header>
      <Link to="/" className="title">
        {process.env.REACT_APP_NAME}
      </Link>
      <SearchBox />
      <ul>
        <li>
          <Link to="/pick/2">RND2</Link>
        </li>
      </ul>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      site by <a href="https://peterklein.dev">Peter Klein</a>&nbsp;
      <span className="attribution">
        using helpful&nbsp;
        <a href="http://www.vo1t.com/Vo1tIllustrated.html">
          illustrations by Bob Borries
        </a>
      </span>
    </footer>
  );
}

interface IsSearchLocationState {
  search: boolean;
}
function SearchBox() {
  const history = useHistory<IsSearchLocationState>();
  const routeMatch = useRouteMatch<SearchResultsParams>("/search/:query");
  const query = routeMatch?.params.query || "";

  function handleSearchInput(e: React.FormEvent<HTMLInputElement>) {
    const query = e.currentTarget.value;
    const url = query ? `/search/${encodeURIComponent(query)}` : "/";

    // Keep the url up to date but don't flood history.
    if (history.location.state?.search) {
      history.replace(url, { search: true });
    } else {
      history.push(url, { search: true });
    }
  }
  return (
    <input
      autoFocus
      placeholder="search"
      value={query}
      onChange={handleSearchInput}
    />
  );
}

interface SearchResultsParams {
  query: string;
}
function SearchResults(props: RouteComponentProps<SearchResultsParams>) {
  function normalize(s: string) {
    return s.toLowerCase();
  }
  /* Return all searchable text from a mode as a list of strings. */
  function extractText(m: Mode) {
    return [m.id, m.name, ...m.tags];
  }

  const query = normalize(decodeURIComponent(props.match.params.query));
  const results = modes.filter((m) =>
    extractText(m).some((s) => normalize(s).includes(query))
  );
  return <CardGrid modes={results} />;
}

function showModeUrl(modes: Mode[]) {
  const ids = modes.map((m) => m.id).join("-");
  return `/show/${ids}`;
}
function unpackModes(s: string) {
  return s.split("-").reduce((xs: Mode[], x) => {
    const mode = GetModeById(x);
    if (undefined !== mode) {
      return [...xs, mode];
    } else return xs;
  }, []);
}

interface RedirectToRandomParams {
  count: string;
}
function RedirectToRandom(params: RouteComponentProps<RedirectToRandomParams>) {
  function Clamp(n: number, min: number, max: number) {
    return Math.min(Math.max(n || 0, min), max);
  }
  function ListOf(n: number, fn: () => Mode) {
    return Array(n).fill(undefined).map(fn);
  }
  function RandomMode() {
    const funModes = modes.filter((m) =>
      boringTags.every((t) => !m.tags.includes(t))
    );
    return funModes[Math.floor(Math.random() * funModes.length)];
  }

  const count = Clamp(parseInt(params.match.params.count), 1, maxPickModes);
  return <Redirect to={showModeUrl(ListOf(count, RandomMode))} />;
}

interface ShowMultipleParams {
  modesSpec: string;
}
function ShowMultiple(param: RouteComponentProps<ShowMultipleParams>) {
  const modes = unpackModes(param.match.params.modesSpec);
  return <CardGrid modes={modes} />;
}

function ShowAll() {
  return <CardGrid modes={modes} />;
}
