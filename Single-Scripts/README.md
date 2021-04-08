# Single Scripts
Single-file scripts that require you copy the text, then paste it replacing the indicated modifier. Most also include instructions for you to follow to customize or complete the script.

## Pronoun Swapper
![Pronoun Chart](https://i.ytimg.com/vi/h_GnSOIfWf4/maxresdefault.jpg)

## Dice Roller
Adds the following command:

/𝗿𝗼𝗹𝗹 𝓃𝒶𝓂𝑒 𝘥𝘪𝘤𝘦𝘯𝘶𝘮𝘣𝘦𝘳d𝓈𝒾𝒹𝑒𝓈+/-𝘮𝘰𝘥𝘪𝘧𝘪𝘦𝘳 𝓇𝑒𝒶𝓈𝑜𝓃

Rolls 𝘥𝘪𝘤𝘦𝘯𝘶𝘮𝘣𝘦𝘳 dice with 𝓈𝒾𝒹𝑒𝓈 number of sides, generating a random result. Only "d𝓈𝒾𝒹𝑒𝓈" is necessary for the command to work; the rest add additional information to the message displayed. 
For example "/roll FaraB 8d6+4 fireball" rolls 8 6-sided dice, then adds an additional 4 to the total. It then creates a message like:
"FaraB rolled 8d6+4 (4,3,1,1,2,5,6,2) Total: 28 for fireball."
A second example, "/roll d20" creates a message like:
"Someone rolled 1d20 Result: 14."


## Floating Text
Paste this script into Context Modifier and follow its instructions to use it. 

This simple script floats whatever you write (into the location indicated in the instructions within the script) # lines breaks back in the text (a number you can set to whatever you like). It's super useful if you have, for instance, one or two predefined NPCs that you want the AI to always remember clearly. This will do that much better than memory, and the information will not be visible to the user. 


## Prompt Extender
This adds extra text directly after your prompt on scenario generation, before it gets sent to the player/AI. Paste in your Input Modifier and follow the instructions in the script.

Note that the added text gets added *directly* after your prompt, with no inherent space or newline. You have to add your own. For example:

Original prompt: "... and the dragon appears."

promptExtension = `

You pull out your sword!`

final prompt the player/AI sees on scenario start:

"... and the dragon appears.

You pull out your sword!"


## Password Script
This is a script to password lock scenarios. Paste it into Input Modifier and follow the instructions in the script to set up a password and an alternate prompt the user sees if they get the password wrong. 

If the initial prompt (after placeholders are filled) does not contain the password you set up, the script replaces the prompt and deletes the WI's. 

Important to note: if your password protected prompt isnt behind at least one layer of scenario options, users will still be able to read it by clicking on the scenario (before a password is checked for).

Try it out my test scenario.

The correct PW is 4582

Open in the AI Dungeon app:

https://aidungeon.page.link/?link=https://scenarioView?publicId=2b7ed360-6b5b-11eb-afc3-41afdff863be&ofl=https%3A%2F%2Fplay.aidungeon.io%2Fmain%2FscenarioView%3FpublicId%3D2b7ed360-6b5b-11eb-afc3-41afdff863be&apn=com.aidungeon&ibi=com.aidungeon.app&isi=1491268416

Open at the AI Dungeon website: 

https://play.aidungeon.io/main/scenarioView?publicId=2b7ed360-6b5b-11eb-afc3-41afdff863be
