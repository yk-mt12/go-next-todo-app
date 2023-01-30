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

  // eslint-disable-next-line no-unused-vars
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

    // eslint-disable-next-line no-unused-vars
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

  // eslint-disable-next-line no-undef
  const enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      e.preventDefault();
      store();
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

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
          <div className="logo">{Next}</div>
          <h1 className="name">Todo List</h1>
        </nav>
        <div className="contents">
          <div className="add">
            <input type="text" className="add-form" ref={ref} placeholder="TODO" onKeyDown={enter} />
            <button className="add-button" onClick={store}>
              ADD
            </button>
          </div>
          {todoList && (
            <ul className="items">
              {todoList.map((props, index) => (
                <li className="item" key={index}>
                  {props.Todo}
                  {props.Id}
                  <label className="trash" onClick={() => deleteTodo(props.Id)}>
                    {Trash}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </style>
  );
};

const Style = styled.main`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};

  main {
    .title {
      display: flex;
      align-items: center;
      padding: 0 0 0 20px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
      svg {
        height: 90px;
        fill: ${({ theme }) => theme.colors.font};
      }

      .name {
        color: ${({ theme }) => theme.colors.font};
        margin: 0 0 0 25px;
        font-size: 30px;
      }
    }

    .contents {
      margin: 30px 0 0;
      color: ${({ theme }) => theme.colors.font};

      .add {
        display: flex;
        gap: 20px;
        width: 100%;

        .add-form {
          line-height: 17px;
          padding: 10px;
          font-size: 15px;
          color: ${({ theme }) => theme.colors.font};
          width: 100%;
          background-color: ${({ theme }) => theme.colors.form};
          border-radius: 7px;
        }

        .add-button {
          background-color: ${({ theme }) => theme.colors.button};
          font-size: 13px;
          padding: 10px;
          color: ${({ theme }) => theme.colors.font};
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          border-radius: 7px;

          :hover {
            background-color: ${({ theme }) => theme.colors.hover};
          }
        }
      }

      .items {
        display: flex;
        flex-direction: column;
        font-size: 15px;
        line-height: 18px;
        gap: 10px;
        list-style: none;
        padding: 0;

        .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 7px;
          padding: 10px;
          background-color: ${({ theme }) => theme.colors.form};

          .trash {
            cursor: pointer;
            svg {
              height: 20px;
              fill: ${({ theme }) => theme.colors.font};
              :hover {
                fill: ${({ theme }) => theme.colors.trash};
              }
            }
          }
        }
      }

      @media screen and (max-width: 640px) {
        padding: 0 20px 0;
      }

      @media (min-width: 640px) {
        padding: 0 48px 0;
      }
    }
  }
`;
