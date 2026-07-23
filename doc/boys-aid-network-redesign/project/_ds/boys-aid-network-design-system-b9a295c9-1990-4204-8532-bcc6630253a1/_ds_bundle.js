/* @ds-bundle: {"format":4,"namespace":"BoysAidNetworkDesignSystem_b9a295","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconCircle","sourcePath":"components/core/IconCircle.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StatCounter","sourcePath":"components/core/StatCounter.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"23e90af9cde5","components/core/Button.jsx":"48e6d6672269","components/core/Card.jsx":"cdbfca7ead5b","components/core/IconCircle.jsx":"d412f3a9a7dd","components/core/SectionHeading.jsx":"cb020b9fff78","components/core/StatCounter.jsx":"997123ac8aa0","ui_kits/website/Homepage.jsx":"82fa53b43d44"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BoysAidNetworkDesignSystem_b9a295 = window.BoysAidNetworkDesignSystem_b9a295 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small label chip used for categories, program tags, and status pills.
 */
function Badge({
  children,
  variant = 'navy',
  style,
  ...rest
}) {
  const variants = {
    navy: {
      background: 'var(--navy-50)',
      color: 'var(--navy-800)'
    },
    red: {
      background: 'var(--red-50)',
      color: 'var(--red-600)'
    },
    solidNavy: {
      background: 'var(--navy-800)',
      color: 'var(--white)'
    },
    solidRed: {
      background: 'var(--red-600)',
      color: 'var(--white)'
    },
    neutral: {
      background: 'var(--gray-100)',
      color: 'var(--gray-600)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.375rem',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Boys Aid Network primary action button.
 * Variants map to the brand's two-color system: accent (red) for primary CTAs,
 * primary (navy) for secondary emphasis, outline/ghost for lower emphasis.
 */
function Button({
  children,
  variant = 'accent',
  size = 'md',
  href,
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 18px',
      fontSize: '0.8125rem'
    },
    md: {
      padding: '12px 28px',
      fontSize: '0.9375rem'
    },
    lg: {
      padding: '16px 40px',
      fontSize: '1.0625rem'
    }
  };
  const variants = {
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--text-on-accent)',
      border: '2px solid var(--color-accent)',
      boxShadow: 'var(--shadow-accent)'
    },
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-dark)',
      border: '2px solid var(--color-primary)',
      boxShadow: 'var(--shadow-md)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '2px solid var(--color-primary)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-accent)',
      border: '2px solid transparent',
      boxShadow: 'none'
    },
    'on-dark': {
      background: 'var(--white)',
      color: 'var(--color-primary)',
      border: '2px solid var(--white)',
      boxShadow: 'var(--shadow-md)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-bold)',
    letterSpacing: 'var(--ls-wide)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    lineHeight: 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard)',
    opacity: disabled ? 0.5 : 1,
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.filter = 'brightness(0.92)';
  };
  const onLeave = e => {
    e.currentTarget.style.filter = 'none';
    e.currentTarget.style.transform = 'none';
  };
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const onUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'none';
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: Tag === 'button' ? disabled : undefined,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Content card. The brand uses clean white cards with soft navy-tinted shadows,
 * medium radius, and an optional accent top-bar. Used for programs and blog posts.
 */
function Card({
  children,
  elevation = 'md',
  accentBar = false,
  hover = true,
  style,
  ...rest
}) {
  const shadows = {
    flat: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const [raised, setRaised] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setRaised(true),
    onMouseLeave: () => setRaised(false),
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: raised ? 'var(--shadow-lg)' : shadows[elevation],
      transform: raised ? 'translateY(-4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), accentBar && /*#__PURE__*/React.createElement("div", {
    style: {
      height: '4px',
      background: 'var(--color-accent)',
      width: '100%'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconCircle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon holder used above program titles. Navy or red disc with a
 * centered icon/glyph — matches the brand's round logo motif.
 */
function IconCircle({
  children,
  variant = 'navy',
  size = 64,
  style,
  ...rest
}) {
  const variants = {
    navy: {
      background: 'var(--navy-800)',
      color: 'var(--white)'
    },
    red: {
      background: 'var(--red-600)',
      color: 'var(--white)'
    },
    navySoft: {
      background: 'var(--navy-50)',
      color: 'var(--navy-800)'
    },
    redSoft: {
      background: 'var(--red-50)',
      color: 'var(--red-600)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-circle)',
      fontSize: size * 0.44,
      flexShrink: 0,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconCircle.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section intro block: optional eyebrow label, heading with an optional
 * accent-underline, and supporting text. Center or left aligned.
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  underline = true,
  onDark = false,
  style,
  ...rest
}) {
  const isCenter = align === 'center';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      maxWidth: '640px',
      margin: isCenter ? '0 auto' : 0,
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-sm)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--color-accent)',
      marginBottom: '0.75rem'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-extrabold)',
      color: onDark ? 'var(--white)' : 'var(--text-heading)',
      margin: 0,
      letterSpacing: 'var(--ls-tight)'
    }
  }, title), underline && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '56px',
      height: '4px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-accent)',
      marginTop: '1rem',
      marginLeft: isCenter ? 'auto' : 0,
      marginRight: isCenter ? 'auto' : 0
    }
  }), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '1rem',
      fontSize: 'var(--fs-lg)',
      lineHeight: 'var(--lh-snug)',
      color: onDark ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCounter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big impact-metric counter used in the stats band ("Boys Reached 500+").
 * Renders a large display number with a suffix and a small caps label.
 */
function StatCounter({
  value,
  suffix = '',
  label,
  onDark = false,
  align = 'center',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      fontSize: 'clamp(2.5rem,4vw,3.5rem)',
      lineHeight: 1,
      color: onDark ? 'var(--white)' : 'var(--color-primary)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-accent)'
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.5rem',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-sm)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: onDark ? 'rgba(255,255,255,0.75)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCounter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCounter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Card,
  StatCounter,
  IconCircle,
  SectionHeading
} = window.BoysAidNetworkDesignSystem_b9a295;
const NAV = ['About Us', 'Programs', 'Impact', 'Blog', 'Gallery'];
const PROGRAMS = [{
  icon: 'hand-heart',
  title: 'Street Children Badge of Hope',
  body: 'A support program targeted at helping young boys who are living and working on the streets.'
}, {
  icon: 'shield',
  title: 'Law Enforcement Shield of Support',
  body: 'A project supporting members of law enforcement across Nigeria, born from a need to strengthen communities.'
}, {
  icon: 'users',
  title: 'Boys Bootcamp',
  body: 'Held first in December 2022, gathering boys ages 8–18 for speakers, mentorship and character-building.'
}, {
  icon: 'graduation-cap',
  title: 'Mentorship Groups',
  body: 'Boys enrolled in mentorship clubs where monthly meetings build confidence, character and direction.'
}, {
  icon: 'scale',
  title: 'Africa Crime Prevention Conference',
  body: 'An initiative to advance SDG 16 across Africa through prevention, dialogue and youth engagement.'
}, {
  icon: 'megaphone',
  title: "International Boys' Day Conference",
  body: 'A bold, visionary conference created to inspire and equip the boychild for a better tomorrow.'
}];
const STORIES = [{
  tag: 'Blog',
  title: 'We Held Our First International Boys’ Day Conference',
  body: 'On July 19, 2025, a dream carried for years finally became reality.'
}, {
  tag: 'Impact',
  title: 'The Boys Against Crime Campaign',
  body: 'Birthed in April 2022 following reports of criminal activity among young boys.'
}, {
  tag: 'Impact',
  title: 'Boys Bootcamp 2022',
  body: 'Boys ages 8–18 gathered for a transformative week of speakers and mentorship.'
}];
function Icon({
  name,
  ...p
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    "data-lucide": name
  }, p));
}
function TopBar({
  onDonate
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-colour.png",
    alt: "Boys Aid Network",
    style: {
      height: 42
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 'auto'
    }
  }, NAV.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n,
    onClick: () => setOpen(i),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      letterSpacing: '.01em',
      color: open === i ? 'var(--red-600)' : 'var(--navy-800)',
      textDecoration: 'none'
    }
  }, n))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    onClick: onDonate
  }, "Support Us")));
}
function Hero({
  onDonate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--navy-800)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/rebrand.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center 30%',
      opacity: 0.28,
      mixBlendMode: 'luminosity'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(11,15,66,0.75),rgba(17,23,92,0.95))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px var(--container-pad)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--red-500)',
      fontSize: 13,
      marginBottom: 18
    }
  }, "Boy Child Advocacy"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'clamp(2.75rem,5vw,4rem)',
      fontWeight: 900,
      lineHeight: 1.08,
      letterSpacing: '-0.01em',
      maxWidth: 900,
      margin: '0 auto'
    }
  }, "Empowering Boys for a Better Tomorrow"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.82)',
      fontSize: 19,
      lineHeight: 1.5,
      maxWidth: 620,
      margin: '20px auto 0'
    }
  }, "Teaching, mentoring, and helping boys find themselves, enjoy inclusion, live godly lives, and contribute to societal development."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: onDonate
  }, "Our Programs"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg",
    onClick: onDonate
  }, "Get Involved"))));
}
function Stats() {
  const items = [['500', '+', 'Boys Reached'], ['12', 'k+', 'Online Impact'], ['80', '+', 'Active Volunteers'], ['6', '', 'Major Programs']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, items.map(([v, s, l]) => /*#__PURE__*/React.createElement(StatCounter, {
    key: l,
    value: v,
    suffix: s,
    label: l
  }))));
}
function Programs() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What We Do",
    title: "Our Programs",
    subtitle: "Six initiatives teaching, mentoring and standing with the boychild across Nigeria and Africa."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 48
    }
  }, PROGRAMS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    accentBar: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement(IconCircle, {
    variant: "navy",
    size: 64,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: 'var(--navy-800)',
      marginBottom: 10,
      lineHeight: 1.25
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-body)',
      lineHeight: 1.6,
      margin: 0
    }
  }, p.body), /*#__PURE__*/React.createElement("a", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 16,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'var(--red-600)',
      cursor: 'pointer'
    }
  }, "Read more ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    style: {
      width: 15
    }
  }))))))));
}
function Stories() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "From the Field",
    title: "Blog & Impact Stories"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 48
    }
  }, STORIES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 168,
      background: 'linear-gradient(135deg,var(--navy-700),var(--navy-900))',
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "solidRed"
  }, s.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: 'var(--navy-800)',
      lineHeight: 1.3,
      marginBottom: 8
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      lineHeight: 1.55,
      margin: 0
    }
  }, s.body)))))));
}
function CTA({
  onDonate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--red-600)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--container-pad)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 38,
      fontWeight: 900,
      letterSpacing: '-.01em'
    }
  }, "Support a Boy, Shape a Future"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 18,
      marginTop: 12
    }
  }, "Your support can transform lives."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    size: "lg",
    onClick: onDonate
  }, "Donate Now"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.6)',
      border: '2px solid rgba(255,255,255,0.6)'
    },
    onClick: onDonate
  }, "Partner with Us"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: 'rgba(255,255,255,0.72)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px var(--container-pad) 40px',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "Boys Aid Network",
    style: {
      height: 44,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 320
    }
  }, "Teaching, mentoring, and helping boys find themselves, enjoy inclusion, live godly lives and contribute to societal development."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 18
    }
  }, ['facebook', 'twitter', 'instagram'].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s,
    style: {
      width: 16
    }
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      fontSize: 13,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      marginBottom: 16
    }
  }, "Quick Links"), NAV.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      fontSize: 14,
      padding: '5px 0',
      cursor: 'pointer'
    }
  }, n))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: '#fff',
      fontSize: 13,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      marginBottom: 16
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: '5px 0'
    }
  }, "hello@boysaidnetwork.org"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      padding: '5px 0'
    }
  }, "+234-814-765-5062"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '20px var(--container-pad)',
      textAlign: 'center',
      fontSize: 13
    }
  }, "\xA9 2025 Boys Aid Network. All Rights Reserved."));
}
function DonateModal({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(11,15,66,0.6)',
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      maxWidth: 420,
      width: '100%',
      padding: 36,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(IconCircle, {
    variant: "red",
    size: 56,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      color: 'var(--navy-800)'
    }
  }, "Make a Donation"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 15,
      marginTop: 8
    }
  }, "Choose an amount to support a boy this month."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      margin: '20px 0'
    }
  }, ['₦5k', '₦10k', '₦25k'].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      flex: 1,
      textAlign: 'center',
      padding: '14px 0',
      borderRadius: 'var(--radius-md)',
      border: `2px solid ${i === 1 ? 'var(--red-600)' : 'var(--border-strong)'}`,
      background: i === 1 ? 'var(--red-50)' : '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      color: 'var(--navy-800)',
      cursor: 'pointer'
    }
  }, a))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    onClick: onClose
  }, "Donate Now")));
}
function Homepage() {
  const [modal, setModal] = React.useState(false);
  const donate = () => setModal(true);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TopBar, {
    onDonate: donate
  }), /*#__PURE__*/React.createElement(Hero, {
    onDonate: donate
  }), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Programs, null), /*#__PURE__*/React.createElement(Stories, null), /*#__PURE__*/React.createElement(CTA, {
    onDonate: donate
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(DonateModal, {
    open: modal,
    onClose: () => setModal(false)
  }));
}
window.Homepage = Homepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconCircle = __ds_scope.IconCircle;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCounter = __ds_scope.StatCounter;

})();
