import React, { useState, useEffect } from 'react';
import ReactGA from "react-ga";
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
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
        <Routes>
          <Route path="/" element={<ShowAll />} />
          <Route path="/pick/:count" element={<RedirectToRandom />} />
          <Route path="/show/:modesSpec" element={<ShowMultiple />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
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

function SearchBox() {
  const navigate = useNavigate();
  const { query = "" } = useParams<SearchResultsParams>();
  const [inputValue, setInputValue] = useState(query); // Local state for the input value

  useEffect(() => {
    setInputValue(query); // Update local state when URL changes
  }, [query]);

  function handleSearchInput(e: React.FormEvent<HTMLInputElement>) {
    const newQuery = e.currentTarget.value;
    setInputValue(newQuery); // Update local state
    const url = newQuery ? `/search/${encodeURIComponent(newQuery)}` : "/";
    navigate(url, { state: { search: true } });
  }

  return (
    <input
      autoFocus
      placeholder="search"
      value={inputValue} // Use local state here
      onChange={handleSearchInput}
    />
  );
}

interface SearchResultsParams extends Record<string, string | undefined> {
  query: string;
}

function SearchResults() {
  const { query = "" } = useParams<SearchResultsParams>();

  function normalize(s: string) {
    return s.toLowerCase();
  }
  /* Return all searchable text from a mode as a list of strings. */
  function extractText(m: Mode) {
    return [m.id, m.name, ...m.tags];
  }

  const normalizedQuery = normalize(decodeURIComponent(query));
  const results = modes.filter((m) =>
    extractText(m).some((s) => normalize(s).includes(normalizedQuery))
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


interface RedirectToRandomParams extends Record<string, string | undefined> {
  count: string;
}
function RedirectToRandom() {
  const { count = "" } = useParams<RedirectToRandomParams>();

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

  const clampedCount = Clamp(parseInt(count), 1, maxPickModes);
  return <Navigate to={showModeUrl(ListOf(clampedCount, RandomMode))} />;
}

interface ShowMultipleParams extends Record<string, string | undefined> {
  modesSpec: string;
}
function ShowMultiple() {
  const { modesSpec = "" } = useParams<ShowMultipleParams>();
  const modes = unpackModes(modesSpec);
  return <CardGrid modes={modes} />;
}

function ShowAll() {
  return <CardGrid modes={modes} />;
}
