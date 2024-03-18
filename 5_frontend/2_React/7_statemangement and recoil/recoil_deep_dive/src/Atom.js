import axios from "axios";
import { atom, selector } from "recoil";

// export const networkAtom = atom({
//   key: "networkAtom",
//   default: 106,
// });
// export const jobAtom = atom({
//   key: "jobAtom",
//   default: 0,
// });
// export const notificationAtom = atom({
//   key: "notificationAtom",
//   default: 12,
// });
// export const messaginAtom = atom({
//   key: "messaginAtom",
//   default: 0,
// });

// export const totalnotificationcount=selector ({
// key:"totalnotificationSelector",
// get:({get})=>{
// const networkAtomCount=get(networkAtom);
// const jobAtomCount=get(jobAtom);
// const notificationAtomCount=get(notificationAtom);
// const messaginAtomCount=get(messaginAtom);
// return networkAtomCount+jobAtomCount+notificationAtomCount+messaginAtomCount;
// }
// })

// this is for fetching data from backend

export const notification = atom({
  key: "networkAtom",
  default: selector({
     key:"networkatomselector",
     get:  async()=>{
      const res =await axios.get("https://sum-server.100xdevs.com/notifications")
      return res.data;
     }
  }),
});

export const totalnotificationcount = selector({
  key: "totalnotification",
  get: ({ get }) => {
    const allnotification = get(notification);
    return (
      allnotification.network +
      allnotification.jobs +
      allnotification.messaging +
      allnotification.notifications
    );
  },
});
