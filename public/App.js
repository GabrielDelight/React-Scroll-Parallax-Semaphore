import "bare-css/css/bare.min.css";
const App = () => {
  return (
    <grid>
      <div col="1/2">
        <card>
          <img
            src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            style={{ height: "400px" }}
          />
          <h5>Artificial intelligence</h5>
          <hr />
          <p>
            The simulation of human intelligence in machines designed to think
            and act like humans is referred to as artificial intelligence (AI).
            Without being explicitly programmed for each task, AI systems
            analyze data and make predictions or decisions using algorithms and
            statistical models.
          </p>
        </card>
      </div>
      <div col="1/2">
        <card>
          <img
            src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            style={{ height: "400px" }}
          />
          <h5>Machine Learning </h5>
          <hr />
          <p>
            Machine Learning (ML) is an artificial intelligence subfield that
            focuses on the creation of algorithms and statistical models that
            allow computers to learn from data, improve their performance over
            time, and make predictions or decisions without being explicitly
            programmed to do so.
          </p>
        </card>
      </div>
    </grid>
  );
};
export default App;
