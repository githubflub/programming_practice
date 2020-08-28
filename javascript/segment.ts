const LENGTH = 10;

const segs = [
  {
    start: 0,
    end: LENGTH,
  }
]

function work(pos: number) {
  const pos_end = pos + 1;
  // console.log(`pos: ${pos}, pos_end: ${pos_end}`)
  // console.log("before:", JSON.stringify(segs));

  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i];
    if (seg.start <= pos && pos_end <= seg.end) {
      // console.log("type 1")
      // split ----|----|----
      segs.splice(i, 1,
        { start: seg.start, end: pos },
        { start: pos_end, end: seg.end }
      )
      break
    }
    else if (seg.start >= pos && seg.end <= pos_end) {
      // delete | -- |
      // console.log("type 4")
      segs.splice(i, 1)
      break
    }
    else if (pos < seg.start && seg.start <= pos_end) {
      // subtract |  --|--
      // console.log("type 2")
      segs[i].start = pos_end;
      break
    }
    else if (pos_end > seg.end && pos <= seg.end) {
      // subtract --|--  |
      // console.log("type 3")
      segs[i].end = pos;
      break
    }
  }
  // console.log("after:", JSON.stringify(segs));
}

function main() {
  let count = 0;
  while (segs.length > 0) {
    const drop = (Math.random() * (LENGTH + 30)) - 15;
    count = count + 1;
    // console.log(`Attempt ${count}:`)
    work(drop);
    // await keypress();
  }

  console.log("Wow that took", count, "iterations!")
}

main();