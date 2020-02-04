function bp_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
}
  function bp_close() {
    mySidebar.style.display = "none";
}
