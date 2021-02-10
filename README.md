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
