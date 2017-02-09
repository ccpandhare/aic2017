var statements = [
  [
    "Qwikcilver Woohoo",
    "Qwikcilver is a technology company in India delivering gift card and stored-value card solutions to retail customers. Qwikcilver is one of the leading providers of retailer gift cards and employee reward cards in India. It manages the entire gift card programme for retailers including design, storage and transactions pertaining to it. The company also launched Woohoo.in and Woohoo App as its B2C platforms that enable consumers and corporate to purchase gift cards and vouchers of various brands.",
    "qwikcilverwoohoo.pdf"
  ],
  [
    "GE Healthcare",
    "GE Healthcare is an American pharmaceutical company and medical equipment manufacturer. It is a subsidiary of General Electric (GE), formerly headquartered in Little Chalfont, Buckinghamshire, United Kingdom; in early 2016 headquarters were moved to Chicago. The company provides medical imaging and information technologies, medical diagnostics, patient monitoring systems, drug discovery, bio pharmaceutical manufacturing technologies and performance solutions services.",
    "gehealthcare.pdf"
  ],
  [
    "Universal Designovation Lab",
    "Universal Designovation Lab LLP.(UDLab) is multiple award winning and a strategic product development firm. UDLab specializes in custom product design, machine design, medical product design and design research. We deliver on our promises. We take responsibility for every part of the assignment we are tasked. UDLab brings together international award winning industrial designers, researchers, strategists and engineers to help achieve your business objectives. UDLab exists to make your lives easier.",
    "udlab.pdf"
  ],
  [
    "Morgan Stanley",
    "Morgan Stanley has been operating in India for over 20 years, providing a range of services to domestic and international clients. The Firm has a premier institutional securities platform in India, providing a full range of investment banking, capital markets, equities, fixed income, commodities and derivative products, as well as research services.",
    "morganstanley.pdf"
  ],
  [
    "Stride",
    "Stride has been working to build an artificial intelligence (AI) engine for the tool, Read Ahead, to enhance reading comprehension and motivation for students at all levels and across all disciplines. The Read Ahead method has been shown to improve reading motivation and comprehension of specific texts within one use.",
    "stride.pdf"
  ],
  [
    "Rolls Royce",
    "Rolls-Royce is a global company providing highly-efficient integrated power and propulsion solutions. Our power systems are predominantly used in aerospace, marine, energy and off-highway applications.",
    "rollsroyce.pdf"
  ]
]

function generateStatement(index) {
  if (index>2) index -= 1;
  statement = "<div class=\"col-sm-11 col-md-9 col-lg-7\">";
  statement += "<h1>"+statements[index][0]+"</h1>";
  statement += "<p class=\"statementpara\">"+statements[index][1]+"</p>";
  statement += "<button type=\"button\" class=\"seeps\">Download Problem Statement</button>";
  statement += "</div>";
  return statement;
}

$(".statementopener").click(function() {
    var thisEl = $(this).index();
    if (parseInt($('#statements').width()) <= 768)
        return false;
    else {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).find("button").html("Show Problem Statement");
            $(".statement").removeClass("expanded").addClass("inactive");
            $(".top").attr('class', 'col-xs-6 col-sm-4 top statementopener');
            $(".bottom").attr('class', 'col-xs-6 col-sm-4 bottom statementopener');
            $(".statement").html("statements");
        } else {
            $(".top").attr('class', 'col-xs-6 col-sm-4 top statementopener');
            $(".bottom").attr('class', 'col-xs-6 col-sm-4 bottom statementopener');
            $(this).find("button").html("Hide Problem Statement");
            if ($(this).hasClass("bottom")) {
                $(".bottom").attr("class", "col-xs-6 col-sm-3 bottom statementopener");
                $(".top").attr('class', 'col-xs-6 col-sm-4 top statementopener compressed');
                $(this).attr("class", "col-xs-6 col-sm-6 bottom statementopener active");
                $(".statement").addClass("expanded").removeClass("inactive");
            } else if ($(this).hasClass("top")) {
                $(".top").attr("class", "col-xs-6 col-sm-3 top statementopener");
                $(".bottom").attr('class', 'col-xs-6 col-sm-4 bottom statementopener compressed');
                $(this).attr("class", "col-xs-6 col-sm-6 top statementopener active");
                $(".statement").addClass("expanded").removeClass("inactive");
            }
            $(".statement").html(generateStatement(thisEl));
        }
    }
});
