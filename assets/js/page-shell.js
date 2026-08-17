/* Auto-converted from JSX to plain JavaScript (React.createElement) so no
   build step is required to deploy this file — it runs as-is in the browser.
   Source of truth for future edits: the vendor-original/ or the original
   JSX authoring; edit this file directly going forward since JSX has been
   dropped from this project entirely. */
const { useState: useStateShell } = React;
function WhatsAppButton() {
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://wa.me/918885349267?text=" + encodeURIComponent("Hi, I'd like to know more about Pawpad's services."),
      target: "_blank",
      rel: "noopener noreferrer",
      className: "whatsapp-fab",
      "aria-label": "Chat on WhatsApp"
    },
    /* @__PURE__ */ React.createElement(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", width: "28", height: "28", fill: "white" },
      /* @__PURE__ */ React.createElement("path", { d: "M16.004 2.002c-7.732 0-14 6.268-14 14 0 2.469.653 4.879 1.893 6.996L2 30l7.19-1.873A13.93 13.93 0 0 0 16.004 30c7.732 0 14-6.268 14-14s-6.268-13.998-14-13.998zm0 25.6a11.56 11.56 0 0 1-5.9-1.617l-.424-.252-4.278 1.114 1.14-4.168-.276-.428A11.53 11.53 0 0 1 4.4 16c0-6.406 5.196-11.6 11.604-11.6S27.608 9.594 27.608 16s-5.196 11.6-11.604 11.6zm6.34-8.672c-.348-.174-2.064-1.02-2.382-1.136-.318-.116-.55-.174-.782.174-.232.348-.898 1.136-1.1 1.368-.202.232-.404.26-.752.086-.348-.174-1.468-.54-2.8-1.724-1.032-.916-1.728-2.048-1.93-2.396-.202-.348-.02-.536.152-.71.156-.154.348-.404.522-.606.174-.202.232-.348.348-.58.116-.232.058-.434-.029-.608-.087-.174-.782-1.886-1.072-2.582-.282-.678-.568-.586-.782-.598-.202-.01-.434-.012-.666-.012s-.608.086-.928.434c-.318.348-1.22 1.192-1.22 2.906 0 1.714 1.248 3.37 1.424 3.602.174.232 2.45 3.74 5.94 5.24.83.36 1.478.574 1.982.734.832.264 1.592.228 2.188.138.668-.1 2.064-.844 2.354-1.66.29-.816.29-1.516.202-1.66-.086-.144-.318-.232-.666-.406z" })
    )
  );
}
function PawpadShell({ route, page: PageComponent }) {
  const [bookingOpen, setBookingOpen] = useStateShell(false);
  const [bookingService, setBookingService] = useStateShell(null);
  const openBooking = (service) => {
    setBookingService(typeof service === "string" ? service : null);
    setBookingOpen(true);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CursorTrail, null), /* @__PURE__ */ React.createElement(TopNav, { route, onBook: openBooking }), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(PageComponent, { onBook: openBooking })), /* @__PURE__ */ React.createElement(Footer, { onBook: openBooking }), /* @__PURE__ */ React.createElement(
    BookingModal,
    {
      open: bookingOpen,
      onClose: () => setBookingOpen(false),
      initialService: bookingService
    }
  ), /* @__PURE__ */ React.createElement(WhatsAppButton, null));
}
function mountPage(route, PageComponent) {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(/* @__PURE__ */ React.createElement(PawpadShell, { route, page: PageComponent }));
}
Object.assign(window, { PawpadShell, mountPage });
