function generateProtocol(child,pastSessions){
    let frameGroup = {};
    let frameSequence = [];
    const BASE_DIR = "https://raw.githubusercontent.com/<ArmaniDilbo/colorAdjectiveLookit/main/";

    function generateAdjTrials(){


        function generateAdjTrialsHelper(timing,question_num){
            return {
                "kind": "exp-lookit-images-audio",
                "audio": "q" + question_num,
                "images": [
                    {
                        "id": "qa" + question_num,
                        "src": "qa" + question_num + ".png",
                        "position": "left"
                    },
                    {
                        "id":"qb" + question_num,
                        "src": "qb" + question_num + ".png",
                        "position": "right",
                    }
                ],
                "baseDir": BASE_DIR,
                "autoProceed": false,
                "doRecording": true,
                "parentTextBlock": {
                    "text": "Some explanatory text for parents",
                    "title": "For parents"
                }
            }

        }
        frameGroup["1"] = generateAdjTrialsHelper(null,"1");
        frameSequence.push("1");
    }


    
    
    var protocol = {
        frames : frameGroup,
        sequence : frameSequence
    }
    return protocol;
}