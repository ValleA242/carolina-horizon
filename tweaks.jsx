/* Carolina Horizon Tweaks — applies design knobs to <html> data-attributes */
const CHC_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#15809F",
  "headingFont": "modern",
  "overlay": "box",
  "texture": "on"
}/*EDITMODE-END*/;

function CarolinaTweaks() {
  const [t, setTweak] = useTweaks(CHC_TWEAK_DEFAULTS);

  const ACCENT_MAP = { "#15809f": "teal", "#0f5571": "navy", "#84b45e": "green" };
  React.useEffect(() => {
    const r = document.documentElement;
    r.setAttribute("data-accent", ACCENT_MAP[String(t.accent).toLowerCase()] || "teal");
    r.setAttribute("data-font", t.headingFont);
    r.setAttribute("data-overlay", t.overlay);
    r.setAttribute("data-texture", t.texture);
  }, [t.accent, t.headingFont, t.overlay, t.texture]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Brand accent" />
      <TweakColor
        label="Primary accent"
        value={t.accent}
        options={["#15809F", "#0F5571", "#84B45E"]}
        onChange={(v) => setTweak("accent", v)}
      />
      <TweakSection label="Typography" />
      <TweakRadio
        label="Heading font"
        value={t.headingFont}
        options={[{ label: "Archivo", value: "modern" }, { label: "Condensed", value: "condensed" }]}
        onChange={(v) => setTweak("headingFont", v)}
      />
      <TweakSection label="Hero & texture" />
      <TweakRadio
        label="Hero overlay"
        value={t.overlay}
        options={[{ label: "Soft", value: "box" }, { label: "Bold", value: "solid" }, { label: "Light", value: "light" }]}
        onChange={(v) => setTweak("overlay", v)}
      />
      <TweakToggle
        label="Coastal line texture"
        value={t.texture === "on"}
        onChange={(v) => setTweak("texture", v ? "on" : "off")}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<CarolinaTweaks />);
