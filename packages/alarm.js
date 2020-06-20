function alarm(){
  if (args.length !== 3) {
    const errorMsg = "Error: try again with 'alarm [hh] [mm] [ss]";
    stream.writeStderr(errorMsg);
    return;
  }
  const hours = parseInt(args[0]);
  const minutes = parseInt(args[1]);
  const seconds = parseInt(args[2]);
  const duration = hours * 60 * 60 + minutes * 60 + seconds;
  const outputMsg = "Alarm set";
  stream.writeStdout(outputMsg);
  setTimeout(() => {
    alert("🚨 Don't miss me! 🚨");
  }, 1000 * duration);
}

alarm();
