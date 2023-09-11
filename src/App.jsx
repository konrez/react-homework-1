import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import GreetingCard from "./components/GreetingCard";
import UserProfile from "./components/UserProfile";
import LikeButton from "./components/LikeButton";
import Todo from "./components/Todo";
import ProductList from "./components/ProductList";
import Accordion from "./components/Accordion";
import CommentList from "./components/CommentList";
import Tab from "./components/Tab";
import TabList from "./components/TabList";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeButton } from "./components/ThemeProvider";
import { useTheme } from "./components/ThemeProvider";

const products = [
  {
    name: "Eggs",
    price: 2.99,
    description: "BIO eggs",
  },
  {
    name: "Fish",
    price: 15.99,
    description: "Fresh fish, gather from Atlantic Ocean",
  },
  {
    name: "Milk",
    price: 3.99,
    description: "Fresh milk, with short expiration date",
  },
];

const accordionItems = [
  {
    title: "Click First",
    content: "Hidden values",
  },
  {
    title: "Click Second",
    content: "Even more hidden values",
  },
  {
    title: "Click Third",
    content: "The most hidden values ever",
  },
];

const comments = [
  {
    username: "Bartek",
    commentText: "This is really fun to learn programming",
  },
  {
    username: "Marcin",
    commentText: "Learning programming will help me a lot in my current job",
  },
  {
    username: "Ewa",
    commentText:
      "I learn programming because i want to become a fullstack developer",
  },
];

const App = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { theme } = useTheme();

  return (
    <div>
      <h2 className="points">#1 Greetings</h2>
      <GreetingCard name="Łukasz" />
      <h2 className="points">#2 User Profile</h2>
      <UserProfile
        name="John Doe"
        email="johnD@blabla.com"
        pictureSrc="https://gazettereview.com/wp-content/uploads/2016/03/facebook-avatar-700x441.jpg.webp"
      />
      <h2 className="points">#3 Like Button</h2>
      <LikeButton />
      <h2 className="points">#4 To Do List</h2>
      <Todo taskName="Do Dishes" />
      <Todo taskName="Take Dog Outside" />
      <Todo taskName="Workout" />
      <Todo taskName="Learn React" />
      <h2 className="points">#5 Product List</h2>
      <ProductList products={products} />
      <h2 className="points">#6 Accordion Examples</h2>
      <Accordion items={accordionItems} />
      <h2 className="points">#7 Comment List</h2>
      <CommentList comments={comments} />
      <h2 className="points">#8 Tabs</h2>
      <TabList>
        <Tab key="1" label="Tab 1">
          Some content 1
        </Tab>
        <Tab key="2" label="Tab 2">
          Some content 2
        </Tab>
        <Tab key="3" label="Tab 3">
          Some content 3
        </Tab>
      </TabList>
      <h2 className="points">#9 Theme Toggle</h2>
      <ThemeButton />
      <p>Current Theme: {theme}</p>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
