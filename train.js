$(document).ready(function () {


    //Variables

    var firebaseConfig = {
        apiKey: "AIzaSyAggzjnNe599D6beUA7un2SK-32GBL0Lf8",
        authDomain: "train-scheduler-7b323.firebaseapp.com",
        databaseURL: "https://train-scheduler-7b323.firebaseio.com",
        projectId: "train-scheduler-7b323",
        storageBucket: "",
        messagingSenderId: "833261187385",
        appId: "1:833261187385:web:4fd6d17a8cae19812238e8"
    };

    //initiate firebase

    firebase.initializeApp(firebaseConfig);

    let database = firebase.database()



    // Assign attr to the lists
    //create set function
    function addToDatabase(name, destination, firstTime, frequency) {
        

        database
            .ref()
            .push({
                name: name,
                destination: destination,
                firstTime: firstTime,
                frequency: frequency
            })
    }
    //create function for val of form
    database
        .ref()
        .on("child_added", function (snapshot) {

            let trainName = snapshot.val().name,
                trainDestination = snapshot.val().destination,
                firstTrain = snapshot.val().firstTime,
                trainFrequency = snapshot.val().frequency

            newRow(trainName, trainDestination, firstTrain, trainFrequency)

        })


    function newRow(name, destination, firstTime, frequency) {
        

        let newTrain = $("<tr>")
        let nameCol = $("<td>")
        let destinationCol = $("<td>")
        let frequencyCol = $("<td>")
        let nextArrivalCol = $("<td>")
        let minutesAwayCol = $("<td>")
        
        // let nextArrival = moment().
        // let minutesAway = frequency - nextArrival;

        nameCol.text(name)
        destinationCol.text(destination)
        frequencyCol.text(frequency)


        newTrain.append(nameCol)
        newTrain.append(destinationCol)
        newTrain.append(frequencyCol)


        $("#trainDataTable").append(newTrain)

    }


    // create function to calcute minutes away 



    //create set function







    //onclick function for submit button 
    $("#add-train").click(function () {
        event.preventDefault();

        let trainName = $("#trainName").val(),
            trainDestination = $("#trainDestination").val(),
            firstTrain = $("#firstTrain").val(),
            trainFrequency = $("#trainFrequency").val()

        addToDatabase(trainName, trainDestination, firstTrain, trainFrequency)
        
    })






















});