const ConsoleLogbutton = document.querySelector(".ConsoleLogbutton");
ConsoleLogbutton.addEventListener("click", () => {
  console.log("This is a log message");
});

const ConsoleErrorbutton = document.querySelector(".ConsoleErrorbutton");
ConsoleErrorbutton.addEventListener("click", () => {
  console.error("This is an error message");
});

const ConsoleCountbutton = document.querySelector(".ConsoleCountbutton");
ConsoleCountbutton.addEventListener("click", () => {
  console.count("Count button clicked");
});

const ConsoleWarnbutton = document.querySelector(".ConsoleWarnbutton");
ConsoleWarnbutton.addEventListener("click", () => {
  console.warn("This is a warning message");
});

const ConsoleAssertbutton = document.querySelector(".ConsoleAssertbutton");
ConsoleAssertbutton.addEventListener("click", () => {   
  console.assert(1 === 2, "This assertion failed");
});

const ConsoleClearbutton = document.querySelector(".ConsoleClearbutton");
ConsoleClearbutton.addEventListener("click", () => {
  console.clear();
});

const ConsoleDirbutton = document.querySelector(".ConsoleDirbutton");
ConsoleDirbutton.addEventListener("click", () => {
  console.dir(ConsoleDirbutton);
});
const ConsoleDirxmlbutton = document.querySelector(".ConsoleDirxmlbutton");
ConsoleDirxmlbutton.addEventListener("click", () => {
  console.dirxml(ConsoleDirxmlbutton);
});

const ConsoleGroupStartbutton = document.querySelector(
  ".ConsoleGroupStartbutton",
);
ConsoleGroupStartbutton.addEventListener("click", () => {
  console.group("Group Start");
  console.log("Inside the group");
});

const ConsoleGroupEndbutton = document.querySelector(".ConsoleGroupEndbutton");
ConsoleGroupEndbutton.addEventListener("click", () => {
  console.groupEnd();
});

const ConsoleTablebutton = document.querySelector(".ConsoleTablebutton");
ConsoleTablebutton.addEventListener("click", () => {
  const data = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    {name: "Dason", age: 5}
  ];
  console.table(data);
});

const StartTimerbutton = document.querySelector(".StartTimerbutton");
StartTimerbutton.addEventListener("click", () => {
  console.time("Timer");
});

const EndTimerbutton = document.querySelector(".EndTimerbutton");
EndTimerbutton.addEventListener("click", () => {
  console.timeEnd("Timer");
});

const ConsoleTracebutton = document.querySelector(".ConsoleTracebutton");
ConsoleTracebutton.addEventListener("click", () => {
  console.trace();
});

const TriggerGlobalErrorbutton = document.querySelector(
  ".TriggerGlobalErrorbutton",
);
TriggerGlobalErrorbutton.addEventListener("click", () => {
  throw new Error("Triggering a global error");
});

 window.onerror = function (message, source, lineno, colno, error) {
   console.error(`Global error caught: ${message} at ${source}:${lineno}:${colno}`);
   return true; 
 }


