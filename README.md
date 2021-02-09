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
Implements the "/en" command. When you type "/en" (without spaces, in do/say/story, w/e) followed by a space and any number of regular letters, such as "write a paragraph about her face" the command creates the following: 

\[Editor's note: write a paragraph about her face.\]

The command will put the editor's note directly in front of your *next new input*. The note will stay around until the *next new input after that*, so it only exists for one input, but will stay around for retrys.

You CANNOT include special characters or grammatical notation, such as ",':", etc, in this version at least. It will break the command.
