import ErrorPopup from "../uiElements/error/ErrorPopup.tsx";

const TestSite = () => {
  return (
    <div>
      <h1 className="text-white">Test Site</h1>
      <ErrorPopup text="Error: Systems Abnormal" x={2} y={2}/>
    </div>
  );
};

export default TestSite;