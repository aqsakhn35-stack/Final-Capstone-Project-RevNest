import fs from "fs";

const db = JSON.parse(fs.readFileSync("public/db.json", "utf8"));
fs.mkdirSync("public/images", { recursive: true });

const shapes = {
  Sedan: ["M100 340 L100 290 Q100 270 130 265 L250 250 L320 190 Q330 180 350 180 L500 180 Q520 180 535 195 L590 250 L680 262 Q710 268 710 290 L710 340 Z", "M335 200 L495 200 L560 250 L270 250 Z M405 200 L405 250"],
  Hatchback: ["M120 340 L120 285 Q120 268 145 262 L260 250 L320 190 L560 190 Q585 192 600 215 L640 262 L690 270 Q710 275 710 295 L710 340 Z", "M335 205 L560 205 L600 255 L285 255 Z M450 205 L450 255"],
  SUV: ["M100 340 L100 270 Q100 250 125 248 L230 240 L280 170 L600 170 Q620 172 630 190 L660 240 L700 250 Q715 255 715 275 L715 340 Z", "M300 185 L610 185 L640 240 L250 240 Z M455 185 L455 240"],
  Coupe: ["M100 340 L100 300 Q100 285 130 280 L280 262 L360 205 L500 205 L580 262 L690 275 Q715 282 715 305 L715 340 Z", "M375 218 L495 218 L545 262 L310 262 Z"],
  Convertible: ["M100 340 L100 300 Q100 285 130 280 L300 270 L340 235 L370 235 L385 270 L690 278 Q715 285 715 305 L715 340 Z", "M342 240 L366 240 L378 268 L318 268 Z"],
  Van: ["M100 340 L100 240 Q100 215 130 210 L250 205 L300 150 L640 150 Q690 150 700 200 L715 280 L715 340 Z", "M310 165 L640 165 L680 215 L260 215 Z M470 165 L470 215"],
};
const cols = ["#d94f4f", "#3b7dd8", "#2e9e6b", "#e0a82e", "#7b5cc4", "#e07b39", "#2b2f36", "#c9ced6"];
const bgs = [["#dfe9f5", "#b7c9e2"], ["#f7e8d0", "#eac89a"], ["#e2f0e6", "#b5d6bf"], ["#ececf7", "#c4c4e3"]];

function svg(car, v) {
  const [body, win] = shapes[car.bodyType] || shapes.Sedan;
  const c = cols[(car.id * 3 + v * 2) % cols.length];
  const [b1, b2] = bgs[(car.id + v) % bgs.length];
  const r = car.bodyType === "SUV" ? 58 : 50;
  const flip = v === 1 ? ' transform="translate(800,0) scale(-1,1)"' : "";
  let tag = `<text x="400" y="60" text-anchor="middle" font-family="Arial" font-size="34" font-weight="bold" fill="#1a1a1a">${car.year} ${car.make} ${car.model}</text>`;
  if (car.rarity) tag += `<text x="400" y="95" text-anchor="middle" font-family="Arial" font-size="22" fill="#8a5a00">Classic · ${car.rarity}</text>`;
  const wheel = (x) => `<circle cx="${x}" cy="345" r="${r}" fill="#1b1b1b"/><circle cx="${x}" cy="345" r="${r - 18}" fill="#c8ccd2"/><circle cx="${x}" cy="345" r="8" fill="#555"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${b1}"/><stop offset="1" stop-color="${b2}"/></linearGradient></defs>
<rect width="800" height="500" fill="url(#g)"/>
<rect y="395" width="800" height="105" fill="#6b6f76" opacity=".55"/>
${tag}
<g${flip}>
<ellipse cx="405" cy="400" rx="330" ry="14" fill="#000" opacity=".22"/>
<path d="${body}" fill="${c}" stroke="#111" stroke-width="3" stroke-linejoin="round"/>
<path d="${win}" fill="#dff3ff" stroke="#111" stroke-width="3" opacity=".9"/>
<rect x="690" y="292" width="24" height="14" rx="4" fill="#fff6c2" stroke="#111" stroke-width="2"/>
<rect x="100" y="292" width="16" height="14" rx="4" fill="#ff5d5d" stroke="#111" stroke-width="2"/>
${wheel(230)}${wheel(570)}
</g></svg>`;
}

for (const car of db.vehicles) {
  car.images = [];
  for (let v = 0; v < 2; v++) {
    const p = `images/${car.id}-${v + 1}.svg`;
    fs.writeFileSync(`public/${p}`, svg(car, v));
    car.images.push("/" + p);
  }
}
fs.writeFileSync("public/db.json", JSON.stringify(db, null, 2));
console.log(db.vehicles.length + " cars ke images ban gaye");