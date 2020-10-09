(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lang/lang-el-json"],{

/***/ "./js/lang/el.json":
/*!*************************!*\
  !*** ./js/lang/el.json ***!
  \*************************/
/*! exports provided: activity_types, app, aspects, hints, languages, user_guide, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"activity_types\":{\"organisation\":\"Οργάνωση\",\"service\":\"Υπηρεσία\",\"user\":\"Χρήστης\"},\"app\":{\"add_new_actor\":\"Προσθήκη νέου ηθοποιού\",\"add_new_item\":\"Προσθήκη νέου αντικειμένου\",\"all\":\"Ολα\",\"colour\":\"Χρώμα\",\"create\":\"Δημιουργώ\",\"created_by\":\"Δημιουργήθηκε από\",\"delete\":\"Διαγράφω\",\"description\":\"Περιγραφή\",\"download\":\"Κατεβάστε\",\"error\":\"Λάθος\",\"error_message\":\"Σφάλμα: {message}\",\"export\":\"Εξαγωγή\",\"exporting\":\"Εξαγωγή\",\"exporting_project\":\"Εξαγωγή έργου\",\"image\":\"Εικόνα\",\"image_drag_prompt\":\"Σύρετε την εικόνα σας εδώ για να ξεκινήσετε ή κάντε κλικ για περιήγηση.\",\"image_is_uploading\":\"Μεταφόρτωση εικόνας\",\"image_remove\":\"Αφαιρέστε την εικόνα\",\"image_upload_error\":\"Σφάλμα μεταφόρτωσης\",\"import\":\"Εισαγωγή\",\"import_project\":\"Εισαγωγή έργου\",\"import_project_drag_hint\":\"Σύρετε το έργο CoSMoS εδώ για να ξεκινήσετε ή κάντε κλικ για περιήγηση.\",\"import_project_notes\":\"Σημείωση: Θα είστε ο κάτοχος του έργου που εισάγεται.\",\"import_project_success\":\"Το έργο εισήχθη με επιτυχία!\",\"just_mine\":\"Μόνο δικό μου\",\"label\":\"Επιγραφή\",\"last_saved_at\":\"Τελευταία αποθήκευση στις {date_time}\",\"log_in\":\"Σύνδεση\",\"maximum_items\":\"Μέγιστο {count} αντικείμενα | Μέγιστο {count} αντικείμενο | Μέγιστα {count} στοιχεία\",\"name\":\"Ονομα\",\"new_project\":\"Δημιουργήστε νέο έργο\",\"next\":\"Επόμενο\",\"no_projects\":\"Δεν βρέθηκαν έργα.\",\"ok\":\"Εντάξει\",\"open_project\":\"Ανοιχτό έργο\",\"please_wait_generate\":\"Περιμένετε έως ότου δημιουργείται το αρχείο.\",\"processing\":\"Επεξεργασία\",\"project\":\"Εργο\",\"project_save_success\":\"Το έργο αποθηκεύτηκε!\",\"save\":\"Σώσει\",\"saving\":\"Οικονομία\",\"scale_to_fit\":\"Κλίμακα για εφαρμογή\",\"search\":\"Αναζήτηση\",\"title\":\"Τίτλος\",\"to_create_project\":\"για να δημιουργήσετε ένα έργο.\",\"try_again\":\"Προσπάθησε ξανά\",\"type\":\"Τύπος\",\"user_is_read_only\":\"Το επίπεδο πρόσβασης χρήστη είναι μόνο για ανάγνωση.\",\"web_address\":\"ηλεκτρονική διεύθυνση\"},\"aspects\":{\"analytic_model\":{\"dashboard\":{\"macro\":{\"label\":\"Μακροεντολή\"},\"meso\":{\"description\":\"Μπορεί να υπάρχουν διάφορα στάδια σε αυτό το επίπεδο.\",\"label\":\"Μέσο\"},\"micro\":{\"label\":\"Μικρο\"}},\"definitions\":{\"beneficiaries\":{\"hint\":\"Υπάρχουν δικαιούχοι εκτός από τον άμεσο χρήστη / συμμετέχοντες Εάν ναι, ποιοι είναι αυτοί;\",\"title\":\"Δικαιούχοι\"},\"broker\":{\"hint\":\"Υπάρχει ενεργός μεσίτης μεταξύ των υποκινητών αλλαγής και αλλαγών; Εάν ναι, ποιοι είναι αυτοί;\",\"title\":\"Μεσίτης\"},\"changeMakers\":{\"hint\":\"Ποιοι είναι ή ήταν οι ηθικοί αυτουργοί που ξεκίνησαν την παρέμβασή σας;\",\"title\":\"Αλλαγή κατασκευαστών\"},\"changeTheorists\":{\"hint\":\"Ποιοι είναι οι θεωρητικοί της αλλαγής για την παρέμβαση;\",\"title\":\"Αλλαγή θεωρητικών\"},\"frontLineServiceDeliverer\":{\"hint\":\"Ποιος είναι ο πρώτος παράγοντας υπηρεσιών;\",\"title\":\"Παράδοση υπηρεσιών πρώτης γραμμής\"},\"instigatorsOfChange\":{\"hint\":\"Ποιοι είναι ή ήταν οι ηθικοί αυτουργοί που ξεκίνησαν την παρέμβαση σας;\",\"title\":\"Υποκινητές αλλαγής\"},\"model\":{\"title\":\"Μοντέλο\"},\"serviceDeliveryManager\":{\"hint\":\"Ποιος είναι ο υπεύθυνος παροχής υπηρεσιών που είναι υπεύθυνος για την παρέμβαση;\",\"title\":\"Διαχειριστής παράδοσης υπηρεσιών\"},\"serviceOrganisationManager\":{\"hint\":\"Ποιος είναι ο Διαχειριστής Οργανισμού Υπηρεσιών για την Παρέμβαση;\",\"title\":\"Υπεύθυνος οργάνωσης υπηρεσιών\"},\"servicePolicyMaker\":{\"hint\":\"Ποιοι είναι ή ήταν οι καθοριστές των πολιτικών υπηρεσιών και των αρχών βάσει των οποίων λειτουργεί η υπηρεσία;\",\"title\":\"Δημιουργός πολιτικής υπηρεσιών\"},\"subjectsOfChange\":{\"hint\":\"Ποια είναι τα αναγνωρισμένα θέματα αλλαγής στην παρέμβαση;\",\"title\":\"Θέματα αλλαγής\"},\"user\":{\"hint\":\"Ποιος είναι ο άμεσος χρήστης της υπηρεσίας;\",\"title\":\"Πελάτης / Χρήστης\"},\"victims\":{\"hint\":\"Υπάρχουν αναγνωρισμένα θύματα; Εάν ναι, ποιοι είναι αυτοί;\",\"title\":\"Θύματα\"}},\"guide\":{\"step01\":\"Σε αυτό το μοντέλο, θεωρούμε μια πρωτοβουλία Cosie όσον αφορά ένα σύνολο ρόλων και τις συνομιλίες στις οποίες εμπλέκονται.\",\"step02\":\"Πρώτα έχουμε έναν παροχέα υπηρεσιών πρώτης γραμμής και έναν πελάτη.\",\"step03\":\"Ο παραδότης έχει διευθυντή ή επόπτη. Αυτό το μοτίβο ενός ατόμου που συμμετέχει σε δύο συνομιλίες θα επαναληφθεί.\",\"step04\":\"Η παράδοση πραγματοποιείται σε κάποιο επίσημο ή ανεπίσημο θεσμικό πλαίσιο.\",\"step05\":\"Τέλος, η υπηρεσία υπάρχει σε κάποια ευρύτερη ρύθμιση πολιτικής.\",\"step06\":\"Αυτό προορίζεται να είναι ένα αφηρημένο μοντέλο. Σε ορισμένες περιπτώσεις μπορεί να υπάρχει μια επίπεδη οργάνωση όπου η παράδοση, η διαχείριση και η πολιτική αναλαμβάνονται από όλα τα μέλη μιας μικρής ομάδας, σε άλλες περιπτώσεις μπορεί να αντιπροσωπεύουν ξεχωριστά άτομα και περιβάλλοντα.\",\"step07\":\"Πώς χαρτογραφούν οι έννοιες των μικρο, μεσο και μακροεντολών στην πρωτοβουλία σας;\",\"step08\":\"Πώς πραγματοποιείται η επικοινωνία μεταξύ τους;\",\"step09\":\"Πόσο συντονισμένοι και συνεκτικοί είναι;\",\"step10\":\"Συγκεκριμένα, υπάρχουν ροές πληροφοριών και συνομιλίες μεταξύ μακροεντολών και μικροϋπολογιστών που δεν διαμεσολαβούνται από το meso; Ποιες είναι οι επιπτώσεις αυτού;\",\"step11\":\"Το επόμενο μοντέλο εξετάζει το πρακτορείο αλλαγών όσον αφορά τους ρόλους και τις συνομιλίες.\",\"step12\":\"Μια αλλαγή πρέπει να υποκινηθεί και μετά να εκτελεστεί.\",\"step13\":\"Οι αλλαγές που εξετάζουμε είναι σε ένα άτομο ή σε ένα μέρος ή περιβάλλον.\",\"step14\":\"Οι αλλαγές που εξετάζουμε είναι συχνά οι ίδιες περίπλοκες και αφορούν περίπλοκες καταστάσεις. Συχνά βασίζονται σε κάποια θεωρία που έχει εισαχθεί ή μελετηθεί στην κατάσταση.\",\"step15\":\"Υπάρχει ένα σύνολο προοριζόμενων δικαιούχων.\",\"step16\":\"Υπάρχουν όμως και πιθανοί αποδέκτες ή θύματα της αλλαγής.\",\"step17\":\"Αυτό το μοντέλο έχει σχεδιαστεί ως ανιχνευτής για το αρχικό μοντέλο υπηρεσίας για τον εντοπισμό των συγκεκριμένων παραγόντων που, σε διάφορα στάδια της ανάπτυξης της πρωτοβουλίας, έχουν αναλάβει έναν ή περισσότερους από αυτούς τους ρόλους της εταιρείας αλλαγής. Ποιοι είναι αυτοί?\"},\"title\":\"Αναλυτικό μοντέλο\"},\"change_model\":{\"dashboard\":{\"ambiguity\":\"Ασάφεια\",\"ambivalence\":\"Αμφιθυμία\",\"committing\":\"Δέσμευση\",\"execute\":\"Εκτέλεση\",\"first_order\":\"Πρώτη σειρά\",\"fourth_order\":\"Τέταρτη παραγγελία!\",\"languaging\":\"\\\"Γλώσσα\\\"\",\"measure\":\"Μετρήσει\",\"plan\":\"Σχέδιο\",\"risk\":\"Κίνδυνος\",\"second_order\":\"Δεύτερη παραγγελία\",\"sense_making\":\"Βγαζει νοημα\",\"third_order\":\"Τρίτη παραγγελία\",\"vision\":\"Οραμα\",\"zero_order\":\"Μηδενική παραγγελία\"},\"definitions\":{\"first_order\":{\"execute\":{\"label\":\"Πώς εκτελείται το σχέδιο;\"},\"measure\":{\"label\":\"Πώς καταγράφονται οι παρατηρήσεις και οι μετρήσεις; Εάν όχι, τι πρέπει να ενεργοποιηθεί για να γίνει αυτό;\"},\"plan\":{\"label\":\"Πώς δημιουργήθηκε ένα σχέδιο για να παραδώσει το όραμα;\"},\"vision\":{\"label\":\"Πώς καθορίστηκαν το όραμα και οι στόχοι;\"}},\"fourth_order\":{\"change_origin\":{\"label\":\"Ποια ήταν η προέλευση της αλλαγής; Και ποια ήταν η αλλαγή;\"},\"event_cause\":{\"label\":\"Τι συνέβη για να συμβεί αυτό το συμβάν;\"},\"unexpected_events\":{\"label\":\"Υπήρξαν περιπτώσεις όπου έχετε δει απρόβλεπτα γεγονότα;\"}},\"model\":{\"title\":\"Μοντέλο\"},\"second_order\":{\"committing\":{\"label\":\"Πώς άλλαξε η παροχή υπηρεσιών της παρέμβασης από τα αρχικά της σχέδια;\"},\"languaging\":{\"label\":\"Ποιες αλλαγές έχουν γίνει στο πώς έγινε κατανοητή η παρέμβαση;\"},\"sense_making\":{\"label\":\"Πότε αναθεωρείτε τα σχέδια και το όραμα;\"}},\"third_order\":{\"processes\":{\"label\":\"Ποιες διαδικασίες προκαλούν ή επιτρέπουν τη δεύτερη ερώτηση;\"}}},\"guide\":{\"step01\":\"Ξεκινάμε με το τυπικό μοντέλο σκόπιμης δράσης με το οποίο όλοι γνωρίζουμε.\",\"step02\":\"Όμως όλοι είχαμε την εμπειρία να κοιτάξουμε πίσω και να συνειδητοποιήσουμε ότι τα πράγματα έχουν αλλάξει με έναν πολύ θεμελιώδη τρόπο: μιλάμε για τη μετατόπιση του παραδείγματος. Αυτό σημαίνει ότι έχουμε δεσμευτεί να κάνουμε νέα αίσθηση του κόσμου μας και αυτό συχνά σημαίνει ότι η γλώσσα μας αλλάζει.\",\"step03\":\"Αυτοί οι δύο διαφορετικοί τρόποι λειτουργίας μερικές φορές αναφέρονται ως πρώτη και δεύτερη σειρά.\",\"step04\":\"Από πλευράς διαχείρισης, έχουμε τη διαχείριση κινδύνων από τη μία πλευρά και την επίλυση αντιφάσεων και αμφισημιών από την άλλη.\",\"step05\":\"Παρουσιάζουμε τώρα την ιδέα των δραστηριοτήτων τρίτης τάξης που επιτρέπουν και υποστηρίζουν τις κατάλληλες μεταβάσεις μεταξύ πρώτης και δεύτερης εργασίας επιτρέποντας ένα βήμα πίσω για να επανεξετάσουμε το ήθος και τις υποθέσεις μας και, όταν έχουμε, να επιστρέψουμε στον τρόπο πρακτικού σχεδιασμού και παράδοσης.\",\"step06\":\"Μερικές φορές η αντίδραση στην ασάφεια και την αντίφαση είναι συναισθηματική: πάλη ή πτήση που είναι μηδενική τάξη, ή έμπνευση και ηρωισμός που θα ονομάσουμε τέταρτη τάξη.\",\"step07\":\"Έτσι, στη δεξιά πλευρά του διαγράμματος έχουμε το φάσμα της συναισθηματικής εργασίας και των απαντήσεων, ενώ από την αριστερή πλευρά έχουμε συμπαραγωγική, συνομιλία.\",\"step08\":\"Αυτό το μοντέλο δημιουργεί μια σειρά από ανοιχτές ερωτήσεις σχετικά με το πού πραγματοποιείται η διαφορετική εργασία πρώτης και δεύτερης τάξης στην πρωτοβουλία σας, ποια είναι η συναισθηματική εργασία και τι απαιτείται και πώς και πού γίνεται και πώς και από ποιον είναι οι απαιτούμενες παρεμβάσεις τρίτης τάξης ανέλαβε;\"},\"title\":\"Αλλαγή μοντέλου\"},\"co_creation_of_service_model\":{\"dashboard\":{\"ethos\":\"Ήθος\",\"infrastructural_relationships\":\"Υποδομικές σχέσεις, πόροι και εγκαταστάσεις\",\"policy_law\":\"Πολιτική και νόμος\",\"resources\":\"Πόροι\",\"service_definition\":\"Πλατφόρμα ορισμού και ανάπτυξης υπηρεσιών\",\"service_delivery\":\"Πλατφόρμα παροχής υπηρεσιών\",\"structural_relationships\":\"Διαρθρωτικές σχέσεις και ευκαιρίες\"},\"definitions\":{\"beneficiary\":{\"hint\":\"Υπάρχουν δικαιούχοι εκτός από τον άμεσο χρήστη / συμμετέχοντες Εάν ναι, ποιοι είναι αυτοί;\",\"title\":\"Δικαιούχος\"},\"delivery\":{\"hint\":\"Ποιος είναι υπεύθυνος για τους μηχανισμούς παράδοσης, τα κανάλια και τους ρόλους του πιλότου σας;\",\"title\":\"Παράδοση\"},\"deployment\":{\"hint\":\"Ποιος αναπτύσσει / αναπτύσσει και ενεργοποιεί / ενεργοποιεί αυτές τις διαδικασίες και πόρους;\",\"title\":\"Αναπληρωτής\"},\"drivers\":{\"body\":{\"hint\":\"Ποιοι είναι οι οδηγοί και τα κίνητρα;\",\"label\":\"Οδηγοί και κίνητρα\"},\"hint\":\"Ποιοι ήταν / είναι οι οδηγοί και τα κίνητρα του έργου; Ήταν μια νομική απαίτηση, η αναγνώριση μιας ανάγκης ή μιας ζήτησης, η εκμετάλλευση μιας ευκαιρίας, η αντιμετώπιση μιας ανισότητας;\",\"title\":\"Οδηγοί και κίνητρα\"},\"evaluation\":{\"hint\":\"Ποιοι είναι οι αξιολογητές και οι διοικητές της υπηρεσίας;\",\"title\":\"Αξιολογητής\"},\"extorg\":{\"hint\":\"Υπάρχουν σχετικοί παράγοντες, ενδιαφερόμενοι φορείς ή φορείς που σχετίζονται με τον πιλότο, αλλά παραμένουν εκτός του οράματος και του ήθους;\",\"title\":\"Εξωτερικοί οργανισμοί\"},\"extsvc\":{\"hint\":\"Ποιες επαναχρησιμοποιήσιμες εγκαταστάσεις, τεχνικοί και ανθρώπινοι πόροι, υπηρεσίες και πηγές πληροφοριών αναπτύχθηκαν και χρησιμοποιήθηκαν για την υποστήριξη αυτών των διαδικασιών καθορισμού και ανάπτυξης υπηρεσιών; Ποιοι εξωτερικοί πόροι και υπηρεσίες (π.χ. επικοινωνίες και κοινωνικά μέσα) χρησιμοποιήθηκαν / χρησιμοποιήθηκαν;\",\"title\":\"Εξωτερικές τεχνικές υπηρεσίες\"},\"infsvc\":{\"hint\":\"Ποιες εξωτερικές υπηρεσίες, κανάλια και εγκαταστάσεις χρησιμοποιείτε κατά την παράδοση των υπηρεσιών σας; Ποιες πηγές πληροφοριών χρησιμοποιείτε; Ποιες πληροφορίες δημοσιεύετε, σε ποιον και χρησιμοποιώντας ποια κανάλια και μέσα;\",\"title\":\"Υπηρεσίες υποδομής\"},\"initiator\":{\"hint\":\"Ποιοι είναι ή ήταν οι υποκινητές που ξεκίνησαν την πιλοτική σας δραστηριότητα;\",\"title\":\"Μυητής\"},\"model\":{\"title\":\"Μοντέλο\"},\"policyDef\":{\"hint\":\"Ποιοι είναι ή ήταν οι καθοριστές των πολιτικών υπηρεσιών και των αρχών βάσει των οποίων λειτουργεί η υπηρεσία;\",\"title\":\"Καθορισμός πολιτικής\"},\"specDes\":{\"hint\":\"Ποιος καθορίζει / καθορίζει και σχεδιάζει / σχεδιάζει τις διαδικασίες και τους πόρους παροχής υπηρεσιών;\",\"title\":\"Καθορισμός και σχεδιαστής\"},\"user\":{\"hint\":\"Ποιος είναι ο άμεσος χρήστης της υπηρεσίας;\",\"title\":\"Χρήστης\"}},\"title\":\"Συν-Δημιουργία Μοντέλου Υπηρεσίας\"},\"community_reporting\":{\"dashboard\":{\"empty_set\":\"Δεν υπάρχουν στοιχεία αναφοράς κοινότητας για αυτό το έργο.\",\"manage\":\"Διαχείριση κοινοτικών αναφορών\",\"title\":\"Αναφορά κοινότητας\"},\"definitions\":{\"data\":{\"hint\":\"Προσθέστε τυχόν Αναφορές κοινότητας που μπορεί να έχει το έργο σας.\",\"title\":\"Αναφορά κοινότητας\"}},\"title\":\"Αναφορά κοινότητας\"},\"documents\":{\"dashboard\":{\"empty_set\":\"Δεν υπάρχουν έγγραφα ή αρχεία για αυτό το έργο.\",\"manage\":\"Διαχείριση εγγράφων και αρχείων\",\"title\":\"Έγγραφα και αρχεία\"},\"definitions\":{\"data\":{\"hint\":\"Προσθέστε τυχόν έγγραφα και αρχεία που μπορεί να έχει το έργο σας.\",\"title\":\"Έγγραφα και αρχεία\"}},\"title\":\"Εγγραφα\"},\"intervention_theory_model\":{\"dashboard\":{\"wellbeing\":\"Ευεξία\"},\"definitions\":{\"innovation\":{\"items\":{\"label\":\"Ποιες πτυχές του κύκλου ζωής των υπηρεσιών είναι σημαντικές για την καινοτομία και την αλλαγή σας;\"},\"title\":\"Καινοτομία και αλλαγή\"},\"intervention\":{\"items\":{\"label\":\"Τι είδους παρέμβαση λαμβάνει χώρα;\"},\"title\":\"Παρέμβαση\"},\"learning\":{\"items\":{\"label\":\"Πώς συμβαίνει η μάθηση στην παρέμβασή σας;\"},\"title\":\"Μάθηση\"},\"model\":{\"title\":\"Μοντέλο\"},\"wellbeing\":{\"items\":{\"label\":\"Ποιες πτυχές της ανθρώπινης ευημερίας και του περιβάλλοντος σχετίζονται με την υπηρεσία σας; Είναι μερικά πιο σημαντικά από άλλα;\"},\"title\":\"Ανθρώπινη ευημερία και περιβάλλον\"}},\"guide\":{\"step01\":\"Οι συν-δημιουργικές πρωτοβουλίες που εξετάζουμε αφορούν όλες τη βελτίωση και την ανάπτυξη της ευημερίας. Εδώ εξετάζουμε την ευημερία των ατόμων, αλλά αυτό μπορεί να εφαρμοστεί σε μέρη ή σε ευρύτερα περιβάλλοντα.\",\"step02\":\"Η ευεξία έχει μια σειρά από διαφορετικές πτυχές που είναι όλες αλληλεξαρτώμενες.\",\"step03\":\"Αλληλεπιδρά επίσης με το φυσικό και κοινωνικό περιβάλλον.\",\"step04\":\"Ορισμένες υπηρεσίες ή παρεμβάσεις αφορούν την επιδιόρθωση κάτι που έχει πάει στραβά και την αποκατάσταση του status quo.\",\"step05\":\"Υπάρχουν όμως και άλλοι σκοποί για παρεμβάσεις.\",\"step06\":\"Η διαδικασία παρέμβασης περιλαμβάνει διάφορα διαφορετικά στάδια και διαδικασίες.\",\"step07\":\"Τέλος, για να διατηρηθούν οι καινοτομίες μας, πρέπει να μάθουμε και να βελτιώσουμε.\",\"step08\":\"Ποιος, τι ή πού είναι ο στόχος της παρέμβασής σας;\",\"step09\":\"Ποιες πτυχές της ευημερίας είναι το επίκεντρο της πρωτοβουλίας σας;\",\"step10\":\"Ποιες πτυχές της ευημερίας του αντικειμένου σας είναι σχετικές αλλά εκτός του πεδίου της πρωτοβουλίας σας;\",\"step11\":\"Ποιες είναι οι σχετικές περιβαλλοντικές πτυχές;\",\"step12\":\"Ποιοι συνδυασμοί παρεμβάσεων, από την πρόληψη έως τον μετασχηματισμό, σχετίζονται με την πρωτοβουλία σας;\",\"step13\":\"Σε ποιο βαθμό ενσωματώνεται η μάθηση και η βελτίωση στην αναπτυξιακή σας διακυβέρνηση και διαδικασίες παράδοσης;\"},\"options\":{\"innovation\":{\"development\":\"Ανάπτυξη\",\"facilitation\":\"Διευκόλυνση\",\"palliation\":\"Ανακούφιση\",\"prevention\":\"Πρόληψη\",\"rehabilitation\":\"Αναμόρφωση\",\"remedy\":\"Θεραπεία\",\"transformation\":\"Μεταμόρφωση\"},\"intervention\":{\"coordination_delivery\":\"Συντονισμός & παράδοση\",\"governance\":\"Διακυβέρνηση\",\"identification\":\"Αναγνώριση & σχεδιασμός\",\"learning\":\"Μάθηση\",\"management\":\"Διαχείριση\"},\"learning\":{\"research_evidence\":\"Έρευνα & στοιχεία\",\"service_improvement\":\"Βελτίωση υπηρεσιών\",\"trials\":\"Δοκιμές\"},\"wellbeing\":{\"faculties_skills\":\"Σχολές και δεξιότητες\",\"mental_psych\":\"Ψυχολογική και ψυχολογική\",\"physical_env\":\"Φυσικό περιβάλλον\",\"physiological\":\"Φυσιολογικός\",\"socio_cultural_env\":\"Κοινωνικοπολιτισμικό περιβάλλον\",\"socio_economic\":\"Κοινωνικοοικονομικό\"}},\"title\":\"Μοντέλο Θεωρίας Παρέμβασης\"},\"moral_ordering_model\":{\"dashboard\":{\"define_ethos\":\"Ορίστε το Ethos\",\"define_ethos_items\":\"Αξίες\\n Αρχές\\n Προθέσεις\\n Πολιτικές\",\"deliver\":\"Παραδίδω\",\"experience\":\"Εμπειρία\",\"govern\":\"Κυβερνώ\",\"individual_cases\":\"Μεμονωμένες περιπτώσεις\",\"plan_manage\":\"Σχεδιάστε και διαχειριστείτε\",\"plan_manage_items\":\"Κανόνες\\n Πόροι\\n Διαδικασίες\\n Λογαριασμοί\",\"the_service_level\":\"Το επίπεδο εξυπηρέτησης\"},\"definitions\":{\"defineEthos\":{\"definedBy\":{\"label\":\"Πώς καθορίζονται αυτές οι τιμές;\"},\"evidenceUrl\":{\"label\":\"Ποια (εξωτερικά) αποδεικτικά στοιχεία είναι διαθέσιμα για την υποστήριξη αυτού;\"},\"title\":\"Ορίστε το Ethos\",\"values\":{\"label\":\"Ποιες τιμές είναι σημαντικές για την αντιμετώπιση της παρέμβασης;\"}},\"deliver\":{\"actors\":{\"label\":\"Από ποιον παραδίδεται;\"},\"evidenceUrl\":{\"label\":\"Ποια (εξωτερικά) αποδεικτικά στοιχεία είναι διαθέσιμα για την υποστήριξη αυτού;\"},\"method\":{\"label\":\"Πώς παρέχεται η παρέμβαση;\"},\"title\":\"Παραδίδω\"},\"govern\":{\"actions\":{\"label\":\"Πώς διέπεται η παρέμβαση; Ποια μέτρα έχουν τεθεί σε εφαρμογή για να διασφαλιστεί ότι τα αποτελέσματα ήταν όπως είχαν προβλεφθεί;\"},\"actors\":{\"label\":\"Ποιος το αξιολογεί;\"},\"evolution\":{\"label\":\"Πώς επηρεάζει αυτό την εξέλιξη της υπηρεσίας;\"},\"improvements\":{\"label\":\"Πώς αναγνωρίζονται οι βελτιώσεις; Πώς εφαρμόζονται;\"},\"outcomes\":{\"label\":\"Τα αποτελέσματα ενσωματώνονται σε στόχους και μετρήσεις; Και αν ναι, ποιος;\"},\"title\":\"Κυβερνώ\"},\"model\":{\"title\":\"Μοντέλο\"},\"planManageCurrent\":{\"actions\":{\"label\":\"Ποιες ενέργειες αναλαμβάνονται τώρα στον πιλότο;\"},\"actors\":{\"label\":\"Ποιες είναι οι τρέχουσες ενέργειες που λαμβάνονται;\"},\"evidenceUrl\":{\"label\":\"Ποια (εξωτερικά) αποδεικτικά στοιχεία είναι διαθέσιμα για την υποστήριξη αυτού;\"},\"title\":\"Σχεδιασμός και διαχείριση - Τρέχουσες ενέργειες\"},\"planManagePrior\":{\"actions\":{\"label\":\"Ποιες ενέργειες είχαν αναληφθεί πριν από την παρέμβαση;\"},\"actors\":{\"label\":\"Ποιος συμμετείχε σε αυτές τις προηγούμενες ενέργειες;\"},\"evidenceUrl\":{\"label\":\"Ποια (εξωτερικά) αποδεικτικά στοιχεία είναι διαθέσιμα για την υποστήριξη αυτού;\"},\"title\":\"Σχεδιασμός και διαχείριση - Προηγούμενες ενέργειες\"}},\"guide\":{\"step01\":\"Υπάρχουν πολλές βασικές διαδικασίες που εμπλέκονται σε μια συν-δημιουργική καινοτομία. Το πρώτο αφορά τον ορισμό του ήθους.\",\"step02\":\"Το δεύτερο περιλαμβάνει δραστηριότητες διαχείρισης και προϊόντα.\",\"step03\":\"Η ηθική τάξη ασχολείται με το ποιος μπορεί να συμμετάσχει σε δραστηριότητες, οπότε, στην περίπτωση της πρωτοβουλίας σας, ποιος εμπλέκεται σε αυτές τις διαδικασίες; Πού και πότε πραγματοποιούνται; Πώς επικοινωνούν και πώς καταγράφονται;\",\"step04\":\"Ως αποτέλεσμα της ηγεσίας, του σχεδιασμού και του σχεδιασμού, οι υπηρεσίες ή οι πρωτοβουλίες παρέχονται και βιώνονται.\",\"step05\":\"Και πάλι ποιος ασχολείται εδώ και συμμετέχει στις δύο πρώτες ομάδες δραστηριοτήτων;\",\"step06\":\"Αντί να κλείσουμε απλώς το βρόχο με μια απλή διαδικασία αξιολόγησης, προτείνουμε ότι, σε συστήματα συμπαραγωγικής ευημερίας και φροντίδας, η διακυβέρνηση περιλαμβάνει όλους τους συμμετέχοντες στις σχέσεις που προσδιορίζονται εδώ, συμμετοχή στην αντιμετώπιση των ερωτήσεων που ορίζονται στο μοντέλο ηθικής παραγγελίας.\",\"step07\":\"Η διακυβέρνηση πραγματοποιείται σε επίπεδο σχέσης πελάτη μεμονωμένων υπηρεσιών.\",\"step08\":\"Πραγματοποιείται επίσης σε γενικό επίπεδο υπηρεσίας.\",\"step09\":\"Πώς πραγματοποιούνται οι διαδικασίες διακυβέρνησης, υπό την έννοια που τις περιγράφουμε εδώ, στην πρωτοβουλία σας;\"},\"options\":{\"sources\":{\"meeting\":\"Συνάντηση\",\"other\":\"Αλλα\",\"policy\":\"Πολιτική\"}},\"title\":\"Ηθική παραγγελία\"},\"social_media\":{\"dashboard\":{\"title\":\"Μεσα ΚΟΙΝΩΝΙΚΗΣ ΔΙΚΤΥΩΣΗΣ\"},\"definitions\":{\"data\":{\"title\":\"Μεσα ΚΟΙΝΩΝΙΚΗΣ ΔΙΚΤΥΩΣΗΣ\"}},\"title\":\"Μεσα ΚΟΙΝΩΝΙΚΗΣ ΔΙΚΤΥΩΣΗΣ\"},\"theory_of_change\":{\"dashboard\":{\"empty_set\":\"Δεν υπάρχουν θεωρίες αλλαγής στοιχείων για αυτό το έργο.\",\"manage\":\"Διαχειριστείτε τη θεωρία της αλλαγής\",\"title\":\"Θεωρία της Αλλαγής\"},\"definitions\":{\"data\":{\"hint\":\"Προσθέστε τυχόν θεωρίες αλλαγής που μπορεί να έχει το έργο σας.\",\"title\":\"Θεωρία της Αλλαγής\"}},\"title\":\"Θεωρία της Αλλαγής\"},\"welcome\":{\"dashboard\":{\"summary\":\"Δημιουργήθηκε από {user} στις {date_time}\"},\"title\":\"καλως ΗΡΘΑΤΕ\"}},\"hints\":{\"editor_double_click_edit\":\"Κάντε διπλό κλικ σε ένα στοιχείο για να το επεξεργαστείτε και εισαγάγετε για αποθήκευση\",\"social_facebook_add\":\"Προσθέστε πλήρεις συνδέσμους (URL) σε ομάδες ή σελίδες Facebook.\",\"social_instagram_add\":\"Εισαγάγετε ένα hashtag Instagram, με ή χωρίς το #. Πατήστε enter για προσθήκη.\",\"social_twitter_add\":\"Εισαγάγετε ένα hashtag Twitter, με ή χωρίς το #. Πατήστε enter για προσθήκη.\",\"social_youtube_add\":\"Εισαγάγετε έναν σύνδεσμο για ένα βίντεο YouTube και πατήστε enter για προσθήκη\",\"type_and_enter\":\"Πληκτρολογήστε το παρακάτω όνομα και πατήστε enter.\"},\"languages\":{\"el\":\"Ελληνικά\",\"en_GB\":\"Αγγλικά\",\"es\":\"Ισπανικά\",\"et\":\"Εσθονικά\",\"fi\":\"φινλανδικός\",\"hu\":\"ουγγρικός\",\"it\":\"ιταλικός\",\"nl\":\"Ολλανδός\",\"pl\":\"Στίλβωση\",\"sv_SE\":\"Σουηδικά\"},\"user_guide\":{\"back\":\"Πίσω\",\"close\":\"Κλείσε\",\"next\":\"Επόμενο\",\"show\":\"Εμφάνιση οδηγού χρήστη\",\"skip\":\"Παράλειψη οδηγού χρήστη\"}}");

/***/ })

}]);