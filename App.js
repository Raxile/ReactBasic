/**
 *
 * <div class="parent">
 * <div class="child1">
 * <h1>This is H1</h1>
 * <h2>This is H2</h2>
 * </div>
 * <div class="child2">
 * <h1>This is H1</h1>
 * <h2>This is H2</h2>
 * </div>
 * </div>
 */

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World! from React"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is H1"),
    React.createElement("h2", {}, "This is H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is H1"),
    React.createElement("h2", {}, "This is H2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
