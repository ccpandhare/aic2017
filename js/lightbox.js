lightboxes = [
  [
    "Overview",
    "APOGEE Innovation Challenge, an exceptional technical symposium, aims at quenching your thirst for hands-on experience in real life problems plaguing the industrial world.<br><br> Organized in collaboration with various multinational companies, this event presents before you existing challenges faced by these companies who seek their solutions from you. These problems, which happen to be discipline specific (one need not belong to that discipline), are to be solved by participants in teams of 2-4 in 20 days. After scrutiny by company officials, top 5 teams will be presenting their final solutions during APOGEE ‘17.<br><br> Exciting Internship Offers and Cash Prizes await the winners. Needless to say, you can brag about cracking a professional challenge while still being in college. Participation Certificate shall be given to all members of each team which present solutions during APOGEE ‘17."
  ],
  [
    "Rules",
    "<ul><li>Participants are to form teams of 1-4 students</li><li>The participants must upload their solutions on the portal given in the APOGEE website.</li><li>The results would be examined by the companies and top teams for each problem statement would be selected to give a more detailed presentation on their solutions during APOGEE ’16 to judges from the respective companies.</li><li>Internships and possible job offers await the winners (one or more from each category).</li>"
  ],
  [
    "Sponsor",
    "???"
  ],
  [
    "FAQs",
    "<span data-toggle=\"collapse\" data-target=\"#faq1\">1) When will the internships take place? </span><p id=\"faq1\" class=\"collapse\">The internships are mostly going to be taking place in the summer of 2016. However, specific dates and period of the internships are subject to discussion.</p>" +
    "<span data-toggle=\"collapse\" data-target=\"#faq2\">2) Can we make teams of students from different years? </span><p id=\"faq2\" class=\"collapse\">Yes you can.</p>" +
    "<span data-toggle=\"collapse\" data-target=\"#faq3\">3) In what form must the solutions to problem statements be submitted? </span><p id=\"faq3\" class=\"collapse\">Most of them are to be uploaded as reports in document formats (MS Word, pdf,etc.). Attached excel files, etc. maybe required for some companies.</p>" +
    "<span data-toggle=\"collapse\" data-target=\"#faq4\">4) Some companies have multiple problem statements? Which one must we work on? </span><p id=\"faq4\" class=\"collapse\">You can work on any of the problem statements given.</p>" +
    "<span data-toggle=\"collapse\" data-target=\"#faq5\">5) Can we solve problem statements for multiple companies? </span><p id=\"faq5\" class=\"collapse\">Yes. Solutions are to be uploaded separately for each company in the upload section.</p>" +
    "<span data-toggle=\"collapse\" data-target=\"#faq6\">6) What must the solutions contain? </span><p id=\"faq6\" class=\"collapse\">They must contain a preliminary solution to the problem statement. The more detailed they are, higher the chances of getting selected for the final round.</p>" +
    "<span data-toggle=\"collapse\" data-target=\"#faq7\">7) What will be there for the final round? </span><p id=\"faq7\" class=\"collapse\">A detailed presentation on the final solutions must be given by the selected teams during APOGEE 16. Winning teams will be given either internships or cash prizes.</p>" +
    "<span data-toggle=\"collapse\" data-target=\"#faq8\">8) Are there any participation certificates? </span><p id=\"faq8\" class=\"collapse\">Participation certificates will be given to all the members of each team which present solutions during APOGEE 16.</p>"
  ],
  [
    "Contact Us",
    "Abcd Xyz<br/>+91 9909909908<br/>something@pilani.bits-pilani.ac.in"
  ],
  [
    "Register",
    ""
  ]
];

function generateLightbox(index) {
  content = "";
  content += "<h1>"+lightboxes[index][0]+"</h1>";
  content += "<p>"+lightboxes[index][1]+"</p>";
  return content;
}

$("li.lightboxli").click(function(){
  index = $(this).index() - 1;
  $(".overlay").addClass("active");
  $(".lightbox .content .container").html(generateLightbox(index));
  $(".overlay").removeClass("active");
  $(".lightbox").fadeIn("fast");
  $(".lightbox").addClass("active");
});

$(".lightbox span.close").click(function(){
  $(".overlay").fadeOut('fast').removeClass("active");
  $(".lightbox").fadeOut('fast').removeClass("active");
});
