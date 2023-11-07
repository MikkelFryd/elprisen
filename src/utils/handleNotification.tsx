export const handleNotification = () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const priceAlert = new Notification("Besked fra Elprisen.nu", {
        body: "Du vil nu modtage en notifikation når el-prisen er lavest",
      });
      return console.log(priceAlert);
    }
  });
};
