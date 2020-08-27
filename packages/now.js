  
function now(){
  if (args.length !== 0) {
    const errorMsg = "Error: try again with 'now";
    stream.writeStderr(errorMsg);
    return;
  }
  const date = new Date();
  const outputMsg = date.toLocaleString();
  stream.writeStdout(outputMsg);
}

now();
