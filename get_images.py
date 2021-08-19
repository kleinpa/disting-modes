#!/usr/bin/python3

import hashlib
import os
import urllib.request

import pdf2image

dir = "public/images"

url = "http://www.vo1t.com/Euro/Illustrated/ESdistingMk4V4.15.pdf"
url_sha256 = "e43e2b3a6cd74589c3d33ebfffc39b864fbb74d3d0ab856bd108ee2df7d46da8"
prefix = "vo1t-distingmk4-"
dpi = 600

message = f"""These images are extracted from {url} by Bob Borries
http://www.vo1t.com/Vo1tIllustrated.html
"""


def main():
    # Make directory and add README.md
    if not os.path.exists(dir):
        os.makedirs(dir)
    with open(os.path.join(dir, "README.md"), "w") as f:
        f.write(message)
    with open(os.path.join(dir, ".gitignore"), "w") as f:
        f.write("*\n")

    with urllib.request.urlopen(url) as f:
        bs = f.read()
    if hashlib.sha256(bs).hexdigest() != url_sha256:
        raise RuntimeError("{url} hash does not match expected value")

    def row(im, w1, h1, w, h, names, offset=-.001):
        iw, ih = im.size
        for i, name in enumerate(names):
            if not name: continue

            im.crop(
                (iw * (w1 + i * w - offset), ih * (h1 - offset),
                 iw * (w1 + i * w + w + offset), ih * (h1 + h + offset))).save(
                     os.path.join(dir, f"{prefix}{name}.png"), "PNG")

    p = pdf2image.convert_from_bytes(bs, dpi=dpi)

    row(p[0], 0.0986, 0.0835, 0.1068, 0.4329,
        ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"])
    row(p[0], 0.0986, 0.0835 + 0.4329, 0.1068, 0.4329,
        ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"])
    row(p[1], 0.1004, 0.0829, 0.1068, 0.4329,
        ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"])
    row(p[1], 0.1004, 0.0829 + 0.4329, 0.1068, 0.4329,
        ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"])
    row(p[2], 0.1004, 0.0817, 0.1068, 0.4329,
        ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8"])
    row(p[2], 0.1004, 0.0817 + 0.4329, 0.1068, 0.4329,
        ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"])
    row(p[3], 0.1004, 0.0811, 0.1068, 0.4329,
        ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8"])
    row(p[3], 0.1004, 0.0811 + 0.4329, 0.1068, 0.4329,
        ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8"])
    row(p[4], 0.1004, 0.0811, 0.1068, 0.4329,
        ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8"])
    row(p[4], 0.1004, 0.0811 + 0.4329, 0.1068, 0.4329,
        ["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8"])
    row(p[5], 0.0990, 0.08, 0.1068, 0.4329,
        ["k1", "k2", "k3", "k4", "k5", "k6", "k7", "k8"])
    row(p[5], 0.0990, 0.08 + 0.4329, 0.1068, 0.4329,
        ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8"])
    row(p[6], 0.1045, 0.08, 0.1068, 0.4329,
        ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "n1"])
    row(p[6], 0.1045, 0.08 + 0.4329, 0.1068, 0.4329,
        ["n5", None, None, None, "n8", None, None, None])


if __name__ == "__main__":
    main()
