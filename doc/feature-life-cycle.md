Step by step instructions while using Trello and Source Tree (with Gitflow).

Always remember golden words of sequence: "commit, pull, push".
1. [Trello] Pick a new task from Trello board's ToDo section. Tasks with highest priority are situated at the top of ToDo section. Also check if some of the tasks is already assigned to you or they should be done only after another task has been moved to Done section.
2. [Trello] Move selected task to In progress section of Trello board.
3. [Source Tree] Before starting to work on a new feature, pull all the latest changes from "develop" branch in Source Tree.
4. [Source Tree] Using Gitflow start a new feature using name that best suits this feature.
5. [Trello] Put a name of your feature branch in your current task comments secion in Trello.
6. [Source Tree] Select your new feature branch and only then add new files or edit existing files needed for this particular feature.
7. [Source Tree] Commit your changes in feature branch.
8. [Source Tree] Just to be sure, pull changes from "develop" branch and also from your current feature's branch if there is a possibility that someone else is working on the same feature.
N.B. Never pull changes between different feature branches.
9. [Source Tree] Push your changes from local feature branch to the feature branch on origin.
10. [Trello] Once you have finished current feature and tested your own code, move your Trello task from In progress to In review section so one of your team members can check it.
11. [Trello] If you are the one who reviews another persons feature always leave comments- if everything looks fine and works well, add comment of any kind of approval. In something is not working properly or could be done better, describe it in your comment and move particular task to ToDo section for adjusments.
12. [Trello] Once your task has passed review, move it to QA section of board so managing gurus can check your work. From here there's only 2 options- either your task will be moved to Done section or back to ToDo section for some more adjusments.
13. [SourceTree] When your task is moved to Done section in Trello by one of gurus, right click on develop branch and select "Merge develop into current branch".
14. [SourceTree] If merge is successful and no conflicts are displayed, close feature using Gitflow and begin work on next task. In the case of conflicts, resolve them using external diff tool before closing feature and moving on to next task.




Soli pa solim instrukcijas, izmantojot Trello un Source Tree (kopā ar Gitflow).

Vienmēr atceries zelta vārdus darbību kārtībai: "commit, pull, push".
1. [Trello] Izvēlies jaunu uzdevumu no Trello "dēļa" ToDo sadaļas. Uzdevumi ar augstāko prioritāti ir izvietoti sadaļas augšpusē. Tāpat arī pārbaudi vai kāds no uzdevumiem jau nav piešķirts tev vai arī uzdevumu drīkst sāk pildīt tikai tad, kad kāds cits no uzdevumiem ir pabeigts un atrodas Done sadaļā.
2. [Trello] Pārvieto izvēlēto uzdevumu uz In progress sadaļu.
3. [Source Tree] Pirms sāc darbu pie jaunas "feature", ielādē jaunākās izmaiņas no develop zara.
4. [Source Tree] Izmantojot Gitflow, izveido jaunu "feature" un nosauc to.
5. [Trello] Pievieno sava "feature" zara nosaukumu Trello uzdevuma komentāros.
6. [Source Tree] Pirms veido jaunus failus vai labo jau esošos, izvēlies savu tikko izveidoto zaru Source Tree.
7. [Source Tree] Pievieno (commit) savas jaunās izmaiņas savam "feature" zaram.
8. [Source Tree] Lai būtu pavisam drošs par to, ka tev ir pieejamas jaunākās izmaiņas projektā, ievelc izmaiņas no "develop" zara, kā arī no esošā "feature" zara, ja ir iespēja, ka kāds no komandas biedriem arī strādā pie šī "feature" vienlaikus ar tevi.
N.B. Nekad neievelc izmaiņas starp dažādiem "feature" zariem.
9. [Source Tree] Nosūti savas izmaiņas (push) no sava datora zara uz servera zaru (origin).
10. [Trello] Kad esi pabeidzis savu "feature" un pārbaudījis kodu, pārvieto uzdevumu no In progress sadaļas uz In review sadaļu, lai kāds no komandas biedriem var tavu darbu pārbaudīt.
11. [Trello] Ja tu esi tas, kurš pārbauda cita komandas biedra "feature", vienmēr raksti komentārus- ja viss ir kārtībā, tad ieraksti apstiprinošu komentāru, bet ja kaut kas nestrādā vai varētu tik izveidots labāk, tad to apraksti un pārvieto uzdevumu atpakaļ uz ToDo sadaļu tālākiem labojumiem.
12. [Trello] Kad tavs uzdevums ir izturējis komandas biedra pārbaudi, pārvieto to uz QA sadaļu, lai kāds no sensejiem var pārbaudīt tavu darbu. Pēc tam atliek 2 scenāriji- vai nu tavs uzdevums tiks pārvietots uz Done sadaļu, vai arī pārvietots atpakaļ uz ToDo sadaļu, lai veiktu papildus labojumus.
13. [SourceTree] Ja kāds no sensejiem tavu uzdevumu ir pārvietojis uz Done sadaļu, atrodoties sava "feature" zarā, labais peles klikšķis uz develop zara un izvēlies "Merge develop into current branch".
14. [SourceTree] Ja apvienošana ir veiksmīga un nav parādījies neviens konflikts, tad aizver "feature" izmantojot Gitflow pogu "Close feature" un sāc strādāt pie nākamā uzdevuma. Ja tomēr parādījušies konflikti, atrisini tos izmantojot speciālo rīku un tad aizver "feature" un sāc strādāt pie nākamā uzdevuma.

