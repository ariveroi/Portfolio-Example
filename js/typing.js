let words = [
    "Software Developer",
    "Web Designer",
    "Front-End Engineer",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;

const wordflick = () => {
  setInterval(() => {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        ++i;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count === 0) {
      if (forwards) {
        offset += 1;
      } else {
        offset -= 1;
      }
    }
    document.querySelector(".typing").innerHTML = part;
  }, speed);
};

// Start the wordflick
wordflick();
