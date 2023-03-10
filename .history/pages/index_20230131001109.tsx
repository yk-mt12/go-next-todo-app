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

  useEffect(() => {
    getTodoList()
  }, [])

  return (
    <style>
      <Head>
        <title>Next.js Todo List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav className="title">
          <div className="logo">{<Next></Next></div>
        </nav>
        <div className="contents"></div>

      </main>
    </style>
  );
};
