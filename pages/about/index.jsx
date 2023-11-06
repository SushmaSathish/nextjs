import Link from "next/link";
import React from "react";

function aboutUs() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  return (
    <div>
      {details.map((item) => (
        // one Way of building Link
        // <Link key={item.id} href={`/about/${item.id}`}>
        <Link
          key={item.id}
          href={{
            pathname: "/about/[id]",
            query: { id: item.id },
          }}
        >
          {item.name}
        </Link>
      ))}
      <Link href="/about/Hello">Greetings</Link>
    </div>
  );
}

export default aboutUs;
