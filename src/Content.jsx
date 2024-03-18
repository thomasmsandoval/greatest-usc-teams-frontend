/* eslint-disable no-unused-vars */
import { TeamsIndex } from "./TeamsIndex";

export function Content() {
  const teams = [
    {
      id: 1,
      year: 1972,
      image: "https://i.ebayimg.com/images/g/h8UAAOSwoT9jaVhr/s-l1600.jpg",
      information:
        "The 1972 USC Trojans football team represented the University of Southern California (USC) during the 1972 NCAA University Division football season. The Trojans won all 12 of their games and were consensus national champions.",
    },
    {
      id: 2,
      year: 2004,
      image: "https://m.media-amazon.com/images/I/51MndQ3JxZL._AC_UF1000,1000_QL80_.jpg",
      information:
        "The 2004 USC Trojans football team represented the University of Southern California in the 2004 NCAA Division I-A football season. The 2004 Trojans football team won the 2004 BCS National Championship by winning the 2005 Orange Bowl, that year's BCS National Championship Game. The team also won the AP title for the second year in a row. It was the Trojans' first unanimous national championship since 1972, and the second time a team had gone wire-to-wire, with the Trojans holding the number 1 spot in the polls all season.",
    },
    {
      id: 3,
      year: 2003,
      image: "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/usctrojans.com/images/2020/6/24/2003team.jpg",
      information:
        "The 2003 USC Trojans football team represented the University of Southern California in the 2003 NCAA Division I-A football season. They won their first national championship since 1978 as they were named the Associated Press and Football Writers Association of America (FWAA) national champions.",
    },
  ];
  return (
    <div>
      <h1>Greatest USC Football Teams</h1>
      <TeamsIndex teams={teams} />
    </div>
  );
}
