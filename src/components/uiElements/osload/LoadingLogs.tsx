import {JSX, useEffect, useState} from "react";
import { Typer } from "./Typer";
import messages from "./loadingMessages.ts";

/**
 * Props for the LoadingLogs component.
 *
 * @property {() => any} callBack - The callback function to be called once all messages have been rendered.
 */
type LoadingLogsProps = {
  /**
   * The callback function to be called once all messages have been typed.
   */
  callBack: () => unknown;
};

/**
 * LoadingLogs component renders a series of messages sequentially using the Typer component.
 *
 * @param {LoadingLogsProps} props - The props for the component.
 * @returns {JSX.Element} - The JSX element that represents the LoadingLogs component.
 */
export const LoadingLogs = ({ callBack }: LoadingLogsProps): JSX.Element => {
  const [waitingListRender, setWaitingListRender] = useState([messages[0]]);

  /**
   * Updates the list of messages to be rendered by adding the next message to the waitingListRender state.
   *
   * @param {number} i - The index of the current message being rendered.
   */
  const updateRenderList = (i: number) => {
    if (!messages[i + 1]) return;
    setWaitingListRender((prev) => [...prev, messages[i + 1]]);
  };

  /**
   * Calls the callBack function once all messages have been rendered.
   */
  const removeComponent = () => {
    if (waitingListRender.length < messages.length) return;
    callBack();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(removeComponent, [waitingListRender]);

  return (
    <>
      {waitingListRender.map((message, i) => (
        <Typer
          key={message}
          callBack={() => updateRenderList(i)}
          receivedText={message}
        />
      ))}
    </>
  );
};