import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Next, Trash } from "../public/Svg";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

type Todo = {
  Id: string;
  Todo: string;
  Created: string;
  Updated: string;
};

const mockData: Todo[] = [
  {
    Id: Math.random().toString(32).substring(2),
    Todo: "キャベツ買う",
    Created: Date.now().toString(),
    Updated: Date.now().toString(),
  },
  {
    Id: Math.random().toString(32).substring(2),
    Todo: "ニンジン買う",
    Created: Date.now().toString(),
    Updated: Date.now().toString(),
  },

  {
    Id: Math.random().toString(32).substring(2),
    Todo: "豚肉買う",
    Created: Date.now().toString(),
    Updated: Date.now().toString(),
  },
];

export const Home: NextPage = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL,
  });

  const ref = useRef<HTMLInputElement | null>(null);

  const getTodoList = async () => {
    // 初回Fetch
    // const res = await apiClient.get<Todo[]>("/");
    // setTodoList(res.data);

    setTodoList(mockData);
  };

  const addTodo = async (todo: string) => {
    // Postリクエスト
    // 本来はTodoを文字列でPost送るとバックエンドでIDと登録日、更新日を追加します
    // const res = await apiClient.post<Todo[]>("/", {
    //   todo,
    // });
    // setTodoList(res.data);
    // 仮のデータをセット

    const newTodo: Todo = {
      Id: Math.random().toString(32).substring(2),
      Todo: todo,
      Created: Date.now().toString(),
      Updated: Date.now().toString(),
    };
  };

  const deleteTodo = async (id: string) => {
    // const res = await apiClient.delete<Todo[]>("/", {
    //   params: {
    //     id,
    //   },
    // });
    // setTodoList(res.data);

    const newTodoList = todoList.filter((todo) => todo.Id !== id);
    console.log(newTodoList);
    setTodoList(newTodoList);
  };

  const store = async () => {
    if (ref.current) {
      await addTodo(ref.current.value);
      ref.current.value = "";
    }
  };

  const enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      e.preventDefault();
      store();
    }
  };
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
          <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Find in-depth information about Next.js features and&nbsp;API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.</p>
          </a>
        </div>
      </main>
    </>
  );
};
