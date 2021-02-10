# Misc Scripts
Random AID scripts that don't fall into larger projects.


## Stats and Killbot
Uses the stat menu to track the classic D&D style attributes (STR, DEX, CON, INT, WIS, CHA). Assigns your attributes randomly (from 8 to 12) on startup. Choosing a profession via the scenario prompt can give you additional stat modifiers.

Uses a hidden catnip 3.0 character sheet to descriptively inform the AI how good each of your attributes are.

Uses KillBot to give you experience points, and has an increasing exp requirement for leveling up. Leveling up gives you more stat buy points.  


## Spell Schools and Killbot
Uses the skill menu to track your skills in the classic D&D spell schools (abjuration, etc). Each spell school has a 33% chance to start at 1 or 2. The others start at 0. Specializing in a school via the scenario prompt can give you additional skill modifiers.

Uses a hidden catnip 3.0 floating character sheet to descriptively inform the AI how skilled you are in each spell school.

Uses a custom WI replacer to swap out the first (dummy) WI with a spellbook. Whenever that spellbook WI is triggered, another script replaces it with a catnip 3.0-formatted floating spellbook that appears just behind the A/N.

Uses KillBot to give you experience points, and has an increasing exp requirement for leveling up. Leveling up gives you more skill buy points. 


## Editor's Note
Implements the "/en" command and "/hang" commands. When you type "/en" (without quotes, in do/say/story, w/e) followed by a space and any text excepting line breaks, such as "write a paragraph about her face, her striking beauty"

\[Editor's note: **write a paragraph about her face, her striking beauty**.\]

"\[Editor's note: " ...gets added to the front of your text... ".\]" gets added to the back.

The command will put the editor's note directly in front of your *next new, text-containing input*. The note will stay around until the *next new, text-containing input after that*, so it only exists for one input, but will stay around for retrys.

The "/hang" command places any text that follows (it after a space, and excluding linebreaks) as a hidden hanging floater that goes just after your inputs, but just before the E/N. 

"/hang" doesn't do any formatting, so make sure to bracket your text with [] if you don't want it getting weird. 

"/hang" text stays around until you overwrite it with a new "/hang" or type "/hang" again without any text afterwards (which removes the floater).


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
