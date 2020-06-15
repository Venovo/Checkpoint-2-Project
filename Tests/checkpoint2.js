var Checkpoint2 = {}
module.exports = {
    beforeEach: browser => {
        Checkpoint2 = browser.page.checkpoint2projectPO()
        Checkpoint2
            .navigate()
    },
    after: browser => {
        Checkpoint2
            .end()
    },
    'Evens and Odds': browser => {
        var EAOresults = {
            resultEven1: '[2,4]',
            resultOdd1: '[1,3,5]',
            resultEven2: '[2]',
            resultOdd2: '111111111111111111111111111111',
            name: 'Filtered: [ { "name": "Jimmy Joe" }, { "name": "Jeremy Schrader" }, { "name": "Carly Armstrong" } ]',
            title: 'Filtered: [ { "title": "Hack0r" }, { "title": "CEO" } ]',
            age: 'Filtered: [ { "age": 12 }, { "age": 24 },',
            hairColor: 'Filtered: [ { "hairColor": "brown" } ]',
            Jfilter: 'Filtered Names: [ "James", "Jessica", "Jennifer" ]',
            Mfilter: 'Filtered Names: [ "Melody", "Mark", "Maddy" ]',
            Bfilter: 'Filtered Names: [ "Blake" ]',
            Tfilter: 'Filtered Names: [ "Tyler" ]',
            MadamPAL: 'Palindrome: true',
            NursesRun1PAL: 'Palindrome: true',
            NursesRun2PAL: 'Palindrome: true',
            CatTacPAL: 'Palindrome: true',
            Sum5: 'Sum: 5',
            Sum250: 'Sum: 250',
            SumBig: 'Sum: 2.4691357824691357e+35',
            SumDecimal: 'Sum: 5.2'
        }
        Checkpoint2
            .setValue('@input1', '1,2,3,4,5')
            .click('@button1')
            .verify.containsText('@outcome1A', EAOresults.resultEven1)
            .verify.containsText('@outcome1B', EAOresults.resultOdd1)
            .clearValue('@input1')
            .setValue('@input1', '2,111111111111111111111111111111')
            .click('@button1')
            .verify.containsText('@outcome1A', EAOresults.resultEven2)
            .verify.containsText('@outcome1B', EAOresults.resultOdd2)
        Checkpoint2
            .setValue('@input2', 'name')
            .click('@button2')
            .verify.containsText('@outcome2', EAOresults.name)
            .clearValue('@input2')
            .setValue('@input2', 'title')
            .click('@button2')
            .verify.containsText('@outcome2', EAOresults.title)
            .clearValue('@input2')
            .setValue('@input2', 'age')
            .verify.containsText('@outcome2', EAOresults.age)
            .clearValue('@input2')
            .setValue('@input2', 'hairColor')
            .click('@button2')
            .verify.containsText('@outcome2', EAOresults.hairColor)
        Checkpoint2
            .setValue('@input3', 'M')
            .click("@button3")
            .verify.containsText('@outcome3', EAOresults.Mfilter)
            .clearValue('@input3')
            .setValue('@input3', 'T')
            .click("@button3")
            .verify.containsText('@outcome3', EAOresults.Tfilter)
            .clearValue('@input3')
            .setValue('@input3', 'J')
            .click("@button3")
            .verify.containsText('@outcome3', EAOresults.Jfilter)
            .clearValue('@input3')
            .setValue('@input3', 'B')
            .click("@button3")
            .verify.containsText('@outcome3', EAOresults.Bfilter)
            .clearValue('@input3')
        Checkpoint2
            .setValue('@input4', 'madam')
            .click('@button4')
            .verify.containsText('@outcome4', EAOresults.MadamPAL)
            .clearValue('@input4')
            .setValue('@input4', 'nurses run')
            .click('@button4')
            .verify.containsText('@outcome4', EAOresults.NursesRun1PAL)
            .clearValue('@input4')
            .setValue('@input4', 'nursesrun')
            .click('@button4')
            .verify.containsText('@outcome4', EAOresults.NursesRun2PAL)
            .clearValue('@input4')
            .setValue('@input4', 'cat, ,tac')
            .click('@button4')
            .verify.containsText('@outcome4', EAOresults.CatTacPAL)
            .clearValue('@input4')
        Checkpoint2
            .setValue('@input5A', '2')
            .setValue('@input5B', '3')
            .click('@button5')
            .verify.containsText('@outcome5', EAOresults.Sum5)
            .clearValue('@input5A')
            .clearValue('@input5B')
            .setValue('@input5A', '100')
            .setValue('@input5B', '150')
            .click('@button5')
            .verify.containsText('@outcome5', EAOresults.Sum250)
            .clearValue('@input5A')
            .clearValue('@input5B')
            .setValue('@input5A', '123456789123456789123456789123456789')
            .setValue('@input5B', '123456789123456789123456789123456789')
            .click('@button5')
            .verify.containsText('@outcome5', EAOresults.SumBig)
            .clearValue('@input5A')
            .clearValue('@input5B')
            .setValue('@input5A', '3.7')
            .setValue('@input5B', '2.5')
            .click('@button5')
            .verify.containsText('@outcome5', EAOresults.SumDecimal)
            .clearValue('@input5A')
            .clearValue('@input5B')
    },
}
