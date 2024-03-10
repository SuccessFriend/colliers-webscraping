const puppeteer = require('puppeteer');
const fs = require('fs');
const csv = require('csv-parser');
const { Parser } = require('json2csv');

let parser = new Parser();

async function scrapFunction() {
        
    for (let j = 0; j < 416; j++) {
        const i = j * 30;
        await fetch("https://www.colliers.com/coveo/rest/search/v2?sitecoreItemUri=sitecore%3A%2F%2Fweb%2F%7BFA041AD7-243D-4265-A0C4-522EF012F8FC%7D%3Flang%3Den%26amp%3Bver%3D2&siteName=Colliers", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,ko;q=0.8",
                "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ2OCI6dHJ1ZSwidG9rZW5JZCI6InQ2a3p5eHF5ZWtqM29xNDJlZzN2bW5zbmR1Iiwib3JnYW5pemF0aW9uIjoiY29sbGllcnNpbnRlcm5hdGlvbmFsIiwidXNlcklkcyI6W3sidHlwZSI6IlVzZXIiLCJuYW1lIjoiYW5vbnltb3VzIiwicHJvdmlkZXIiOiJFbWFpbCBTZWN1cml0eSBQcm92aWRlciJ9XSwicm9sZXMiOlsicXVlcnlFeGVjdXRvciJdLCJpc3MiOiJTZWFyY2hBcGkiLCJleHAiOjE3MTAxNTg0NjcsImlhdCI6MTcxMDA3MjA2N30.e8gUKpHKpwxqYMiR-IYUMha-zaOmSdCjbgXZ4QgagbM",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "cookie": "ApplicationGatewayAffinityCORS=d344ddc93e625e8fbb75c68c33798448; ApplicationGatewayAffinity=d344ddc93e625e8fbb75c68c33798448; colliers#lang=en; colliers#colliers-country-id={8B63F007-1EE6-4C2A-BFB9-25D1466E7738}; shell#lang=en; ASP.NET_SessionId=gbji1puk3kslwu32hirms040; colliers#colliers-metroarea-id=39f8723d-fe05-4ed6-b3f2-12f80482b2fa; __cf_bm=DZhf2CrmS.jbUuGyPM5SAy2H7TXnhoeJAaXb6BXkiUU-1710072267-1.0.1.1-_ZIk6BFjJcCPfw_z3T9OKB1mT.enolPH1O_3N3Ik0gK_FG4LVPD7_HS.8fU.YcrlfhclMZn.99PCIMKR_.aazg; _cfuvid=okXIKT5XdKz5kLF1H_RD.ccOEeScUvLXoUGvU9BPKEs-1710072267817-0.0.1.1-604800000; __RequestVerificationToken=dcPuNu3kbGpVU2bZxIsjbZD5z_h5K6HRtHYojfGSlJ5WWlvsY-1v7Cz-Tv4dDz7ofB3HShYZynEBWvywJA4Uht0GbOkOyYBajTCZsc2cBj01; _gcl_au=1.1.701519093.1710072428; _gid=GA1.2.394998022.1710072429; _an_uid=-1; _gd_visitor=b996bdff-2c4e-47cc-8a6d-d9920884a030; _gd_session=e24ac861-d574-4dfe-8cbc-45e81c4df136; _gd_svisitor=a96a645fff662400491f5665ca0100005f9fbe00; SC_ANALYTICS_GLOBAL_COOKIE=7e546fefe2dc4a38ab6b67ed9d7744e6|True; OptanonConsent=isGpcEnabled=0&datestamp=Sun+Mar+10+2024+21%3A15%3A31+GMT%2B0900+(Japan+Standard+Time)&version=202401.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=c8fde016-3b44-4544-9249-77ece5d553ae&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&geolocation=RU%3B&AwaitingReconsent=false; OptanonAlertBoxClosed=2024-03-10T12:15:31.631Z; _ga_8CJ4KEQLQ8=GS1.1.1710072428.1.1.1710072932.0.0.0; _ga_CVYN6Z26TS=GS1.1.1710072933.1.0.1710072933.0.0.0; _ga=GA1.1.340004439.1710072429; _ga_SC9D9S6V3Y=GS1.1.1710072428.1.1.1710072933.0.0.0; _ga_5D1DKYRHTZ=GS1.1.1710072428.1.1.1710072935.0.0.0",
                "Referer": "https://www.colliers.com/en/properties",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": `actionsHistory=%5B%5D&referrer=&analytics=%7B%22clientId%22%3A%22d9162b3a-6c3b-cbfe-2616-f7af6e4dc3cf%22%2C%22documentLocation%22%3A%22https%3A%2F%2Fwww.colliers.com%2Fen%2Fproperties%23sort%3Drelevancy%26f%3Alistingtype%3D%5BAll%2520Listings%5D%26f%3Arecenttransactions%3D%5B0%5D%22%2C%22documentReferrer%22%3A%22%22%2C%22pageId%22%3A%22%22%7D&visitorId=d9162b3a-6c3b-cbfe-2616-f7af6e4dc3cf&isGuestUser=false&aq=(%40propertyforsaleorleasecomputed%3D%3D%22All%20Listings%22)%20(%40recentz32xtransactionz32xflag%3D%3D0)%20(%24qre(expression%3A'%40tier%3D%3D2'%2C%20modifier%3A5000))%20(%24qre(expression%3A'%40tier%3D%3D1'%2C%20modifier%3A3000))%20(((%40z95xpath%3D%3D07C74A35FEDA4D8EA0A85502AAEBF3EA%20(%40z95xtemplate%3D%3D534C0EB71D32434FBE0F62A2AB174F16%20%40country%3D8B63F0071EE64C2ABFB925D1466E7738))%20NOT%20%40z95xtemplate%3D%3DFE5DD82648C6436DB87A7C4210C7413B))%20(%40hidez32xfromz32xsearch%3D%3D0)%20(%40hidez32xfromz32xsearch%3D%3D0)&cq=(%40z95xlanguage%3D%3Den)%20(%40z95xlatestversion%3D%3D1)%20(%40source%3D%3D%22Coveo_web_index%20-%20COLLIERS-AZ-102-PROD%22)&searchHub=Properties&locale=en&maximumAge=0&firstResult=${i}&numberOfResults=30&excerptLength=200&enableDidYouMean=false&sortCriteria=relevancy&queryFunctions=%5B%5D&rankingFunctions=%5B%5D&groupBy=%5B%7B%22field%22%3A%22%40propertyforsaleorleasecomputed%22%2C%22maximumNumberOfValues%22%3A4%2C%22sortCriteria%22%3A%22nosort%22%2C%22injectionDepth%22%3A1000%2C%22completeFacetWithStandardValues%22%3Atrue%2C%22allowedValues%22%3A%5B%22All%20Listings%22%2C%22For%20Sale%22%2C%22For%20Lease%22%2C%22For%20Sublease%22%5D%2C%22advancedQueryOverride%22%3A%22(%40recentz32xtransactionz32xflag%3D%3D0)%20(%24qre(expression%3A'%40tier%3D%3D2'%2C%20modifier%3A5000))%20(%24qre(expression%3A'%40tier%3D%3D1'%2C%20modifier%3A3000))%20(((%40z95xpath%3D%3D07C74A35FEDA4D8EA0A85502AAEBF3EA%20(%40z95xtemplate%3D%3D534C0EB71D32434FBE0F62A2AB174F16%20%40country%3D8B63F0071EE64C2ABFB925D1466E7738))%20NOT%20%40z95xtemplate%3D%3DFE5DD82648C6436DB87A7C4210C7413B))%20(%40hidez32xfromz32xsearch%3D%3D0)%20(%40hidez32xfromz32xsearch%3D%3D0)%22%2C%22constantQueryOverride%22%3A%22(%40z95xlanguage%3D%3Den)%20(%40z95xlatestversion%3D%3D1)%20(%40source%3D%3D%5C%22Coveo_web_index%20-%20COLLIERS-AZ-102-PROD%5C%22)%22%7D%2C%7B%22field%22%3A%22%40propertytypescomputed%22%2C%22maximumNumberOfValues%22%3A201%2C%22sortCriteria%22%3A%22occurrences%22%2C%22injectionDepth%22%3A1000%2C%22completeFacetWithStandardValues%22%3Atrue%2C%22allowedValues%22%3A%5B%5D%7D%2C%7B%22field%22%3A%22%40relatedez120xpertsfullnamecomputed%22%2C%22maximumNumberOfValues%22%3A1001%2C%22sortCriteria%22%3A%22alphaascending%22%2C%22injectionDepth%22%3A1000%2C%22completeFacetWithStandardValues%22%3Atrue%2C%22allowedValues%22%3A%5B%5D%7D%2C%7B%22field%22%3A%22%40recentz32xtransactionz32xflag%22%2C%22maximumNumberOfValues%22%3A2%2C%22sortCriteria%22%3A%22occurrences%22%2C%22injectionDepth%22%3A1000%2C%22completeFacetWithStandardValues%22%3Afalse%2C%22allowedValues%22%3A%5B%221%22%5D%2C%22advancedQueryOverride%22%3A%22(%40propertyforsaleorleasecomputed%3D%3D%5C%22All%20Listings%5C%22)%20(%24qre(expression%3A'%40tier%3D%3D2'%2C%20modifier%3A5000))%20(%24qre(expression%3A'%40tier%3D%3D1'%2C%20modifier%3A3000))%20(((%40z95xpath%3D%3D07C74A35FEDA4D8EA0A85502AAEBF3EA%20(%40z95xtemplate%3D%3D534C0EB71D32434FBE0F62A2AB174F16%20%40country%3D8B63F0071EE64C2ABFB925D1466E7738))%20NOT%20%40z95xtemplate%3D%3DFE5DD82648C6436DB87A7C4210C7413B))%20(%40hidez32xfromz32xsearch%3D%3D0)%20(%40hidez32xfromz32xsearch%3D%3D0)%22%2C%22constantQueryOverride%22%3A%22(%40z95xlanguage%3D%3Den)%20(%40z95xlatestversion%3D%3D1)%20(%40source%3D%3D%5C%22Coveo_web_index%20-%20COLLIERS-AZ-102-PROD%5C%22)%22%7D%5D&facetOptions=%7B%7D&categoryFacets=%5B%5D&retrieveFirstSentences=true&timezone=Asia%2FTokyo&enableQuerySyntax=false&enableDuplicateFiltering=false&enableCollaborativeRating=false&debug=false&context=%7B%22colliersLocale%22%3A%22en%22%7D&allowQueriesWithoutKeywords=true`,
            "method": "POST"
        })
        .then(response => {
            if (response.ok) {
                console.log("response okay!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                return response.json(); // assuming the response is in JSON format
            } else {
                throw new Error("Request failed with status " + response.status);
            }
        })
        .then(data => {
            result_data = data.results;
            for (let i = 0; i < result_data.length; i++) {
                const link = result_data[i].ClickUri;
                console.log(link);
                const result = { link };
                const csv = parser.parse(result);
                const csvDataWithoutHeader = csv.split('\n')[1] + '\n';
                fs.appendFileSync("colliers_link.csv", csvDataWithoutHeader, 'utf8', (err) => {
                    if (err) {
                        console.error('Error appending to CSV file:', err);
                    } else {
                        console.log('CSV data appended successfully.');
                    }
                });
                
            }
        })
        .catch(error => {
            console.error("No match result ...");
        });
    }
}

scrapFunction();