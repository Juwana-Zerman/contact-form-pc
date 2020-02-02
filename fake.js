let payload = {
    token: "_0RJMOwNaxFuB5dzJGqoFQ",
    data: {
      name: "nameFirst",
      "age": "numberInt|15,70",
      "location":
        {
            "city":"addressCity"
        },
      "date": "date",
      _repeat: 30
    }
};

$.ajax({
  type: "POST",
  url: "https://app.fakejson.com/q",
  data: payload,
  success: function(resp) {
    // Do something with fake data
    }
});
