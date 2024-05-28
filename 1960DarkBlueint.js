campaignTrail_temp.global_parameter_json = [
    {
        "model": "campaign_trail.global_parameter",
        "pk": 1,
        "fields": {
            "vote_variable": 1.125,
            "max_swing": 0.12,
            "start_point": 0.94,
            "candidate_issue_weight": 10,
            "running_mate_issue_weight": 3,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": 25,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2016,
            "display_year": "1960 Dark Blue",
            "summary": "The honeymoon period for Francis Walter and the American public was over. After a few bright spots, such as Puerto Rico's statehood, President Walter's unexpected tenure plummeted into the abyss with the Walter Recession in 1958. Now, with the revolution in Cuba, the turbulent situation in Indochina, the rising civil rights movement, and the gradual decline of McCarthyism, everything at home and abroad proved that the 1960 election is destined to be historic for the United States.<p>In the 1960 Election, President Walter must fight to escape his personal scandals and troubles at home and abroad, and save his deeply divided party to gain a glimmer of hope for re-election. Meanwhile, his opponent, Senator Mike Mansfield of Montana, who won the nomination after four ballots, have a significant lead from the start, all he had to do is tread carefully to maintain his lead. However, the Dixiecrat strike, led by Harry F. Byrd, added new variables to the election.</P>",
            "image_url": "https://i.imgur.com/u2uDQ9T.jpeg",
            "winning_electoral_vote_number": 270,
            "advisor_url": "123",
            "recommended_reading": "<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>",
            "has_visits": 1,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 20,
        "year": 2016,
        "is_premium": 0,
        "display_year": "1960 Dark Blue"
    }
]

campaignTrail_temp.credits = "Not Dan Bryan"

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 1001,
        "fields": {
            "first_name": "Francis",
            "last_name": "Walter",
            "election": 20,
            "party": "Republican",
            "state": "Pennsylvania",
            "priority": 1,
            "description": "<p>In 1956, when Francis E. Walter agreed to become McCarthy's running mate, he never imagined that he would soon become president, but it happened.</p>Although initially welcomed by the American people, Walter's presidency ran into trouble. Economic and diplomatic challenges made him increasingly unpopular, and his transition from New Deal Democrat to McCarthyite Republican spelled trouble for him.</p>Challengers from within the Republican Party, liberals who hate Walter, fatigue with the Republicans 12 years of governance, his own health issues, and the sluggish economic situation... all of this seems to be going to make \"Tad\" Walter lose the presidency. Solon of the Lehigh Valley faces a tough challenge, he won't surrender...but will he prevail?\n\n</p>",
            "color_hex": "#6d1717",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "https://i.imgur.com/6zT9FHW.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50000,
        "fields": {
            "first_name": "Styles",
            "last_name": "Bridges",
            "election": 20,
            "party": "Republican",
            "state": "New Hampshire",
            "priority": 1,
            "description": "<p>Put description here</p>",
            "color_hex": "#6d1717",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/J18xmjk.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p>Styles Bridges' peak years are behind him. The veteran senator has been one of the representatives of conservatives since the 1930s and is known for his fierce opposition to the New Deal. Bridges is also Joe's friend, which is one of the few things he and you have in common.</p>The relationship between current Vice President and you is not always harmonious. He and you had completely different views on many issues, and you never felt that he, as a staunch conservative, truly trusted you. In addition, his age and physical condition will also be a doubtful factor. While he might give you a boost in the Northeast, the doubts raised by his age are certainly concerning.</p>However, Arens still recommends that you don't try to dump him. This will make you appear indecisive, Arens warns, and will burn one of the few bridges you have with the Taftites. All in all, this will be a risky venture, and if you want to be re-elected, the risk may not be something you can bear.</p>Politics is the art of compromise, Tad, you know that.\n\n\n\n</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 50000,
        "fields": {
            "first_name": "Henry Cabbot",
            "last_name": "Lodge",
            "election": 20,
            "party": "Republican",
            "state": "Massachusetts",
            "priority": 1,
            "description": "<p>Arens frowned when he heard your choice. Are you really sure you want to drop Bridges? He asked. When he heard your affirmative answer, Arens began to sigh, but he finally accepted the fact that you would choose Lodge.</p>Secretary Lodge represents the party's eastern wing. Before Joe unexpectedly chose you, most people thought he would be Joe's running mate. Lodge does not quite agree with you on communism, but he is closer to you on economics than to the Taftites. It is also because of his endorsement that you were nominated.</p>This popular incumbent Secretary of State will help you bridge the gap with the liberal of the party,but at the cost, Taftites dissatisfaction will rise to unprecedented levels. Additionally, his home state is also a state you can't win.</p>That's very risky, especially given your current disadvantage in the polls. But maybe the unorthodox option will work like it did in 1956?\n\n\n</p>",
            "color_hex": "#6d1717",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "https://i.imgur.com/tviYY4w.png",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p>Arens frowned when he heard your choice. Are you really sure you want to drop Bridges? He asked. When he heard your affirmative answer, Arens began to sigh, but he finally accepted the fact that you would choose Lodge.</p>Secretary Lodge represents the party's eastern wing. Before Joe unexpectedly chose you, most people thought he would be Joe's running mate. Lodge does not quite agree with you on communism, but he is closer to you on economics than to the Taftites. It is also because of his endorsement that you were nominated.</p>This popular incumbent Secretary of State will help you bridge the gap with the liberal of the party,but at the cost, Taftites dissatisfaction will rise to unprecedented levels. Additionally, his home state is also a state you can't win.</p>That's very risky, especially given your current disadvantage in the polls. But maybe the unorthodox option will work like it did in 1956?\n\n\n</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 152590,
        "fields": {
            "candidate": 1001,
            "running_mate": 50000
        }
    }
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            1001
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            1001
        ]
    }
]

jet_data = {
    "headerColor": "#09407c",
    "windowColor": "#153a75",
    "containerColor": "#441717",
    "innerWindowColor": "#233e28",
    "bannerImageUrl": "https://i.imgur.com/jVsDFDs.png",
    "backgroundImageUrl": "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg",
    "endingTextColor": "#000000",
    "customQuote": ""
}

//#startcode



nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#09407c";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#153a75";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#441717";

document.getElementById("header").src = "https://i.imgur.com/jVsDFDs.png";

document.body.background = "https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#233e28!important;}</style>";

//#endcode
