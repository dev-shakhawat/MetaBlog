export default function convertTime(timeString) {
  const date = new Date(timeString);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" }); // August
  const year = date.getFullYear();

  let hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12; // convert 0 to 12

  return `${day} ${month} ${year} ${hour}:${minute}:${second} ${ampm}`;
}

   