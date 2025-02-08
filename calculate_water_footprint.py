from flask import Flask, render_template, request
import pickle

app = Flask(__name__)

# Load the pre-trained model
with open('water_footprint_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route("/", methods=["GET", "POST"])
def index():
    wf = None
    result = None

    if request.method == "POST":
        # Get user input from form
        people = int(request.form['people'])
        average_shower = int(request.form['average_shower'])
        low_flow_shower = request.form['low_flow_shower'] == 'Yes'

        # Map user input to model features
        low_flow_value = 1 if low_flow_shower else 0

        # Predict water footprint using the model
        features = np.array([[people, average_shower, low_flow_value]])
        wf = model.predict(features)[0]

        result = f"Your water footprint is: {wf:.2f} gallons"

    return render_template("index.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)
