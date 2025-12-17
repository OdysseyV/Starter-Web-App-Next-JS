// import global CSS file here

export const metadata = {
  // Next Metadata API
  // previous Index.html <head> element
  // any files added to app folder will get added to the head metatdata element, courtesy of next.js
  title: "React App",
  description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    //Index.html
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
