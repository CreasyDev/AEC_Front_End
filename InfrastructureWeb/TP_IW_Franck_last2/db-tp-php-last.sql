-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Hôte : sql9.freemysqlhosting.net
-- Généré le :  mar. 15 sep. 2020 à 00:44
-- Version du serveur :  5.5.62-0ubuntu0.14.04.1
-- Version de PHP :  7.0.33-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `sql9365657`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `categorie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `categorie`) VALUES
(1, 'General'),
(2, 'Consignes'),
(3, 'Lorem ipsum');

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `id` int(11) NOT NULL,
  `auteur` varchar(50) NOT NULL,
  `commentaire` text NOT NULL,
  `date_creation` date NOT NULL,
  `sujet_id` int(11) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `commentaires`
--

INSERT INTO `commentaires` (`id`, `auteur`, `commentaire`, `date_creation`, `sujet_id`) VALUES
(1, 'Mohammad Musharraf', 'Je suis un écrivain indépendant et je peux donc dire que je suis qualifié pour répondre à cette question.Au mois de février de cette année, j\'ai enfin su ce que je devais faire ensuite dans ma vie. Mais comment? Je n\'en étais pas sûr.', '2020-09-01', 1),
(2, ' Répondu 16 avril', 'La personne dont je vais parler n\'est pas devenue une personne célèbre. C\'est une ancienne camarade de classe qui était aussi une assez bonne amie.Je l\'ai connue dès la première année de maternelle. Nous avons fréquenté la même école primaire, le même collège et le même lycée.', '2020-08-31', 3),
(3, 'Desiree Castillo', 'J\'ai été au lycée avec une fille, elle est devenue célèbre en quelques jours seulement. Bon…Étant donné la nature de son milieu, c\'est compréhensible. Sortir du lot dans des films pour adultes est un bon moyen de devenir connu.', '2020-08-30', 3),
(4, 'Alya Cuci', 'Moi j\'ai été surprise de savoir que le dicton \"un mal pour un bien\" est vrai\r\nJe m\'explique en primaire un garçon me harcelais parce que je suis turc il me disait que j\'étais une voleuse (a cause de mes origines) et quelques fois pendant les récréations il allait dans la classe et mettrait les affaires des autres dans mon sac ma trousse…', '2020-09-02', 3);

-- --------------------------------------------------------

--
-- Structure de la table `membres_forum_discussion`
--

CREATE TABLE `membres_forum_discussion` (
  `id` int(11) UNSIGNED NOT NULL,
  `nom_complet` varchar(50) NOT NULL,
  `date_ajout` date NOT NULL,
  `rating` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `membres_forum_discussion`
--

INSERT INTO `membres_forum_discussion` (`id`, `nom_complet`, `date_ajout`, `rating`) VALUES
(1, 'Hector Quintanilla', '2020-07-08', 4.2),
(2, 'Dennis Miles', '2020-06-02', 4.8),
(3, 'Louis Le Lay', '2020-09-01', 3.8),
(4, 'Xin Li', '2020-07-16', 4.8),
(5, 'Louis Le Lay', '2020-08-05', 4.5);

-- --------------------------------------------------------

--
-- Structure de la table `nouvelles`
--

CREATE TABLE `nouvelles` (
  `id` int(11) NOT NULL,
  `titre` varchar(50) NOT NULL,
  `description_courte` varchar(125) NOT NULL,
  `description_longue` text NOT NULL,
  `date_nouvelle` date NOT NULL,
  `actif` tinyint(1) NOT NULL,
  `fk_categorie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `nouvelles`
--

INSERT INTO `nouvelles` (`id`, `titre`, `description_courte`, `description_longue`, `date_nouvelle`, `actif`, `fk_categorie`) VALUES
(1, 'le Roha', 'Ce grand arbre en forme de parasol pouvant atteindre 24 mÃ¨tres de haut, Ã  feuilles persistantes plates et couronnÃ©es.', 'Une toute nouvelle HE Ã  dÃ©couvrir : le Roha\r\nCe grand arbre en forme de parasol pouvant atteindre 24 mÃ¨tres de haut, Ã  feuilles persistantes plates et couronnÃ©es, est originaire dâ€™Afrique Australe, dâ€™Afrique de lâ€™Est, de lâ€™archipel des Mascareignes et en particulier de Madagascar. Ses fleurs sont jaunÃ¢tres et ses fruits, uniques : durs et parsemÃ©s Ã  lâ€™extÃ©rieur par des bulles de rÃ©sine, ils sont vert rougeÃ¢tre Ã  maturitÃ©, mais brunissent sur le terrain.\r\nOn lâ€™appelle de nombreuses faÃ§ons : Roha, Tandroha, Tandroraha, Mandrofo, Mandrorofa, Mandrorofy, dâ€™oÃ¹ lâ€™importance de sa terminologie latine, unique, Hymenaea verrucosa. Il est dÃ©jÃ  bien connu pour sa rÃ©sine dure, le Copal, extrait de ses racines, son tronc et ses fruits pour en faire de lâ€™encens, et est utilisÃ© depuis quelques mois en aromathÃ©rapie.\r\n\r\nLâ€™ALLIÃ‰ DE LA PEAUâ€¦\r\nLâ€™HE de Roha est trÃ¨s intÃ©ressante pour contrer les problÃ¨mes cutanÃ©s tels que lâ€™acnÃ© ou la couperose et pour soulager les peaux sensibles enflammÃ©es. Elle est Ã©galement efficace contre les brÃ»lures, les coupures et les plaies infectÃ©es grÃ¢ce Ã  ses propriÃ©tÃ©s analgÃ©sique percutanÃ©e, antiseptique, bactÃ©ricide, astringent mais aussi anti hÃ©matome et cicatrisante.\r\n\r\nDE LA CIRCULATIONâ€¦\r\nSes SesquiterpÃ¨nes font de lâ€™HE de Roha un alliÃ© pour les problÃ¨mes de phlÃ©bite, dâ€™hÃ©morroÃ¯des, de stases veineuses, de varices, dâ€™oedÃ¨mes des membres infÃ©rieurs, de drainage lymphatique, de rÃ©tention hydrolipidique puisquâ€™il est dÃ©congestionnante veineux, lymphatique et vasculotrope.\r\n\r\nET DES INFLAMMATIONS ARTICULAIRES :\r\nLâ€™HE de Roha peut Ãªtre ajoutÃ©e dans les mÃ©langes contre lâ€™arthrose, lâ€™arthrite, la tendinite, la sciatique, le lumbago, les rhumatismes, les crampes et les contractions musculaires et articulaires. Elle renforcera notamment lâ€™action anti-douleur et anti-rhumatismale.\r\n\r\nApplication :\r\nLâ€™HE de Roha sâ€™utilise en usage local, diluÃ©e Ã  50%, soit 4 gouttes dâ€™HE pour 4 gouttes dâ€™huile vÃ©gÃ©tale, par exemple de Millepertuis sauf pour le visage qui nÃ©cessite une plus grande dilution. Voici donc une formule acnÃ© spÃ©cifique Ã  appliquer Ã  lâ€™aide dâ€™un coton tige sur les zones affectÃ©es matin et soir en Ã©vitant absolument le contour des yeux :\r\n\r\n2 gouttes dâ€™HE de Roha\r\n1 goutte dâ€™HE de Tea Tree\r\n1 goutte dâ€™HE de GÃ©ranium\r\n16 gouttes dâ€™huile vÃ©gÃ©tale de Jojoba', '2020-08-27', 1, 1),
(2, 'Nouvelle inactive', 'Cette nouvelle est inactive et elle ne devrait pas s\'afficher sur le site!', 'Attention, assurez-vous de bien lire les consignes :)', '2020-08-28', 0, 1),
(3, 'Consignes', 'Les huiles essentielles ne sont pas des produits anodins. Certaines prÃ©cautions dâ€™emploi sâ€™imposent.', 'Les prÃ©cautions dâ€™emploi des huiles essentielles\r\nSur la forme, certains modes dâ€™application des huiles essentielles exigent des prÃ©cautions. Câ€™est particuliÃ¨rement le cas de la prise par voie orale. Il est en effet nÃ©cessaire, dâ€™une part de prendre conseil auprÃ¨s dâ€™un professionnel de santÃ© et dâ€™autre part de diluer fortement lâ€™huile choisie sur un comprimÃ© neutre, un morceau de sucre, dans du miel ou de lâ€™huile vÃ©gÃ©tale. Dâ€™une maniÃ¨re gÃ©nÃ©rale, chaque huile essentielle peut Ãªtre utilisÃ©e de diffÃ©rentes faÃ§ons, mais tous les modes dâ€™application ( cutanÃ©e, bain, diffusion, voie oraleâ€¦) ne conviennent pas Ã  toutes les huiles essentielles. La premiÃ¨re prÃ©caution consiste donc Ã  se renseigner avant toute utilisation.\r\n\r\nSur le fond, les huiles essentielles contiennent par dÃ©finition des composÃ©s actifs qui sont susceptibles dâ€™entrer en interaction avec un traitement mÃ©dicamenteux. Une personne qui prend des mÃ©dicaments doit donc absolument avoir un avis mÃ©dical avant de les utiliser.\r\n\r\nCertaines huiles essentielles comportent des composants particuliers qui nÃ©cessitent de prendre des prÃ©cautions. Ainsi, les huiles dites dermocaustiques (riches en terpÃ¨nes, phÃ©nols et aldÃ©hydes terpÃ©niques) peuvent se rÃ©vÃ©ler irritantes, particuliÃ¨rement pour les peaux sensibles. Câ€™est le cas des huiles essentielles de basilic sacrÃ©, de cannelle de Ceylan, de girofle et de citronnelle, entre autres. De mÃªme, les huiles essentielles photosensibilisantes interdisent toute exposition au soleil durant une pÃ©riode de quatre heures aprÃ¨s leur utilisation. Il sâ€™agit, par exemple, des huiles dâ€™agrumes, dâ€™ angÃ©lique ou de bergamote.\r\n\r\nSi des huiles essentielles prÃ©sentent de forts risques dâ€™allergie ( achillÃ©e millefeuille, mÃ©lisse, cyprÃ¨sâ€¦), il est prudent, dans tous les cas, dâ€™effectuer un test cutanÃ© avant toute application : dÃ©posez quelques gouttes dans le pli du coude et patientez 24 heures pour voir si vous observez une rÃ©action. Si tel est le cas, appliquez une huile vÃ©gÃ©tale apaisante.\r\n\r\nPour avoir toujours une huile essentielle de qualitÃ©, des prÃ©cautions sâ€™imposent pour la conserver : les flacons doivent toujours Ãªtre bien fermÃ©s et gardÃ©s Ã  lâ€™abri de la chaleur et de la lumiÃ¨re. Certaines huiles essentielles, telles celles dâ€™agrumes, doivent Ãªtre conservÃ©es au frais. Enfin, nâ€™utilisez pas dâ€™huile essentielle au-delÃ  de deux ans aprÃ¨s lâ€™ouverture du flacon.', '2020-08-25', 1, 2),
(4, 'Covid-19 : l\'huile essentielle', 'Covid-19 : l\'huile essentielle de cajeput prometteuse\r\nBonne nouvelle pour lâ€™aromathÃ©rapie, une Ã©tude est sortie dimanche', 'Covid-19 : l\'huile essentielle de cajeput prometteuse\r\nBonne nouvelle pour lâ€™aromathÃ©rapie, une Ã©tude est sortie dimanche dernier sur les effets de lâ€™huile essentielle de cajeput sur la Covid-19. Dâ€™aprÃ¨s les chercheurs, cette derniÃ¨re contribue Ã  limiter la propagation du virus dans le corps humain.\r\n\r\nAprÃ¨s les rÃ©sultats prometteurs de lâ€™eucalyptol, molÃ©cule prÃ©sente dans lâ€™huile essentielle dâ€™eucalyptus contre la Covid-19, câ€™est dÃ©sormais lâ€™effet de lâ€™huile essentielle de feuilles de cajeput (Melaleuca cajeputii) sur la maladie qui intÃ©resse les scientifiques. Cette huile essentielle originaire du Vietnam et qui appartient Ã  la mÃªme famille botanique que lâ€™huile essentielle dâ€™arbre Ã  thÃ© et de niaouli ; elle permettrait de prÃ©venir la propagation du coronavirus dans lâ€™organisme, selon une nouvelle Ã©tude parue dimanche dernier sur le site Chemistry Europe.  \r\nUne action inhibitrice\r\nCette nouvelle Ã©tude montre que lâ€™huile essentielle de cajeput exerce un effet inhibiteur sur une protÃ©ine particuliÃ¨re. En effet, c\'est sur celle-ci que se fixe le SRAS-CoV-2 afin de pÃ©nÃ©trer dans les cellules du corps humain pour se reproduire. Par cette action inhibitrice, lâ€™huile essentielle de cajeput reprÃ©senterait une ressource prÃ©cieuse pour prÃ©venir les infections et limiter lâ€™invasion du SRAS-CoV-2 dans lâ€™organisme. Cette capacitÃ© Ã  exercer un effet barriÃ¨re sur le virus serait permise entre autres, grÃ¢ce Ã  la teneur de lâ€™huile essentielle en terpinÃ©ol, guaiol et linalol, trois molÃ©cules chimiques aux propriÃ©tÃ©s anti-infectieuses.\r\n\r\nEn cas de suspicion ou dâ€™infestation\r\nMais alors, peut-on dâ€™ores-et-dÃ©jÃ  utiliser lâ€™huile essentielle de cajeput en cas dâ€™exposition, de suspicion ou dâ€™infestation au coronavirus ? Nous avons demandÃ© lâ€™avis de FranÃ§oise Couic-Marinier, docteure en pharmacie et aromathÃ©rapeute. Lâ€™experte recommande dâ€™utiliser lâ€™huile essentielle par voie olfactive, sauf pour les enfants avant 6 ans et les femmes enceintes ou allaitantes.\r\n\r\nBien utiliser lâ€™huile essentielle de cajeput selon FranÃ§oise Couic-Marinier\r\nEn cas de suspicion (avec ou sans symptÃ´mes) dâ€™infestation Ã  la Covid-19, FranÃ§oise Couic-Marinier recommande de respirer 3 gouttes dâ€™huile essentielle de cajeput (Melaleuca cajeputii) sur un mouchoir ou dans un diffuseur sec jusquâ€™Ã  5 fois pendant 3 jours. Le virus se propageant dans les molÃ©cules dâ€™eau, il est prÃ©fÃ©rable de ne pas utiliser de diffuseur Ã  vapeur dâ€™eau (par mesure de prÃ©caution).', '2020-08-24', 1, 2),
(5, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '2020-08-01', 1, 3),
(14, 'Les huiles essentielles!', 'Jâ€™ai dÃ©couvert cette annÃ©e le pouvoir des huiles essentielles et je capote. Jâ€™avoue avoir Ã©tÃ© un brin sceptique.', 'Jâ€™ai dÃ©couvert cette annÃ©e le pouvoir des huiles essentielles et je capote. Jâ€™avoue avoir Ã©tÃ© un brin sceptique au dÃ©part concernant lâ€™efficacitÃ© de ces petites fioles magiques, mais honnÃªtement, les tester, câ€™est les adopter. Je ne suis pas du tout professionnelle en la matiÃ¨re (et je vous invite Ã  en consulter un si vous avez la moindre interrogation mÃ©dicale), mais jâ€™ai quelques must-have desquels je ne peux plus me passer.\r\n\r\n1. Menthe poivrÃ©e\r\nDepuis environ deux ans, jâ€™ai commencÃ© Ã  souffrir de maux de tÃªte vraiment intenses et mÃªme de migraines. Pour vrai, je ne pourrais plus vivre sans huile essentielle de menthe poivrÃ©e pour les calmer. Jâ€™en ai TOUJOURS sur moi au cas oÃ¹.\r\nComment faire?\r\nAppliquer en petits massages deux ou trois gouttes dâ€™huile essentielle de menthe poivrÃ©e sur ces trois rÃ©gions prÃ©cises :\r\n\r\n1. Les tempes (faire VRAIMENT attention Ã  ne pas en mettre prÃ¨s des yeux, juste les vapeurs vont vous chauffer comme jamais, vaut mieux en mettre un peu moins et en ajouter aprÃ¨s une minute ou deux si lâ€™effet nâ€™est pas assez intense Ã  votre goÃ»t)\r\n2. DerriÃ¨re les oreilles\r\n3. Sur la nuque\r\n\r\nIl nâ€™y a rien dâ€™Ã©sotÃ©rique lÃ -dedans, ce nâ€™est mÃªme pas nÃ©cessairement le cÃ´tÃ© olfactif qui aide dans mon cas, câ€™est complÃ¨tement physique : votre tÃªte va devenir toute froide et sâ€™engourdir. Ã‡a fait TELLEMENT de bien! Parfois, jâ€™en ajoute mÃªme un peu sur mon front le long de ma ligne de cheveux, mais faites toujours attention de rester loin des yeux. Jâ€™ai aussi ce mÃ©lange dâ€™huiles Ã  bille pour maux de tÃªte qui est bien pratique, mais je le trouve tout de mÃªme moins efficace que lâ€™huile de menthe poivrÃ©e pure. Jâ€™ai aussi entendu dire quâ€™elle Ã©tait magique pour les crampes menstruelles et je nâ€™ai pas de difficultÃ© Ã  le croire! Ã€ essayer!\r\n\r\n2. Lavande\r\nSouffrant dâ€™anxiÃ©tÃ©, lâ€™huile essentielle de lavande est devenue ma meilleure amie. Je lâ€™utilise :\r\n\r\nEn diffusion toute la nuit\r\nâ€‹Quelques gouttes sur mon oreiller avant le dodo (je vois rÃ©ellement une diffÃ©rence sur la qualitÃ© de mes nuits)\r\nSur mes boules de sÃ©chage\r\nDans le rouleau de papier de toilette (chaque fois que quelquâ€™un va le tourner, lâ€™odeur va se dÃ©gager!)\r\nPartout parce que câ€™est mon odeur prÃ©f\' au monde (linge, tapis, rideaux, coussinsâ€¦)\r\nDans mon collier dâ€™aromathÃ©rapie que je porte presque tous les jours (et soit dit en passant, je craignais de trop sentir la lavande, mais mon entourage me confirme que je ne sens pas quand je le porte! Et moi je le sens vraiment beaucoup, alors câ€™est juste parfait.)', '2020-09-04', 1, 1),
(15, 'Huiles essentielles: mode d\'emploi', 'De lâ€™eucalyptus pour stopper une toux incessante, de la lavande vraie pour apaiser une peau rÃ©active, de lâ€™orange', 'De lâ€™eucalyptus pour stopper une toux incessante, de la lavande vraie pour apaiser une peau rÃ©active, de lâ€™orange pour mieux dormir... Les huiles essentielles sont de trÃ¨s bonnes alliÃ©es, si on sait bien les employer.\r\n\r\nOrigine et Ã©volution\r\n\r\nDepuis des siÃ¨cles, en Inde, en Chine et en Ã‰gypte, les vertus des huiles essentielles sont exploitÃ©es. Mais ce nâ€™est quâ€™au dÃ©but du XXe siÃ¨cle que lâ€™aromathÃ©rapie est apparue comme une alternative mÃ©dicale et que les prÃ©parations cosmÃ©tiques lâ€™ont adoptÃ©e. Aujourdâ€™hui, nombreuses sont les marques de beautÃ© Ã  miser sur les huiles essentielles. Mais attention: des prÃ©cautions sâ€™imposent.\r\n\r\n\r\nQu\'est-ce que c\'est ?\r\n\r\nUne huile essentielle est extraite (par distillation Ã  la vapeur dâ€™eau ou par centrifugeuse) dâ€™une partie dâ€™un vÃ©gÃ©tal: fleur, feuille, fruit, graine, Ã©corce, etc. Lorsquâ€™on Ã©pluche une orange par exemple, câ€™est son huile essentielle qui se volatilise et ravit nos narines. Ces huiles cumulent de 20 Ã  200 composÃ©s organiques aux propriÃ©tÃ©s surpuissantes. Lorsquâ€™on regroupe ces essences, cette synergie en amplifie les bienfaits.\r\n\r\nComment\r\n\r\nNon solubles dans lâ€™eau, les huiles essentielles doivent Ãªtre diluÃ©es dans une huile vÃ©gÃ©tale sans odeur (noisette, germe de blÃ©, amande douce), si on dÃ©sire en faire bÃ©nÃ©ficier notre Ã©piderme Ã  lâ€™aide de massages ou de bains notamment. On profite aussi de leurs vertus en faisant des inhalations par diffusion atmosphÃ©rique â€“ au moyen dâ€™un diffuseur Ã©lectrique et non en les chauffant, action qui pourrait cuire les essences â€“, ou par voie orale. Ce dernier usage est toutefois rÃ©servÃ© Ã  lâ€™adulte, de maniÃ¨re exceptionnelle, sous les conseils avisÃ©s dâ€™un professionnel de lâ€™aromathÃ©rapie vu le potentiel irritant, voire toxique, de bon nombre dâ€™huiles essentielles.', '2020-08-23', 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `sujets`
--

CREATE TABLE `sujets` (
  `id` int(11) UNSIGNED NOT NULL,
  `auteur_id` int(11) UNSIGNED NOT NULL,
  `titre` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `url` varchar(255) NOT NULL,
  `date_creation` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `sujets`
--

INSERT INTO `sujets` (`id`, `auteur_id`, `titre`, `description`, `url`, `date_creation`) VALUES
(1, 1, 'Comment acquérir des compétences en travaillant depuis chez soi ?', 'Il y a quelques jours, il est allé chez le docteur pour faire un bilan de santé. Pendant la conversation, son docteur lui a indiqué qu’elle avait un séminaire la semaine suivante, et qu’elle avait besoin d’aide pour sa communication en ligne.', 'https://fr.quora.com/Comment-acquérir-des-compétences-en-travaillant-depuis-chez-soi', '2020-08-27'),
(2, 2, 'Qu\'avez-vous appris trop tard dans la vie ?', '1. Arrêtez de tout publier sur les médias sociaux.\\r\\n2. La plupart des gens ne vous aiment pas, c\'est juste une relation symbiotique.\\r\\n3. Ne forcez RIEN - relations, conversations, rencontres avec quelqu\'un, etc.\\r\\n4. Levez-vous tous les jours et trouvez votre motivation ( le POURQUOI ), puis utilisez-la pour vous propulser toute la journée.k', 'https://fr.quora.com/Quavez-vous-appris-trop-tard-dans-la-vie-84', '2020-08-28'),
(3, 3, 'Qui parmi vos anciens camarades de classe vous a le plus surpris plus tard dans la vie et pourquoi ?', 'J\'ai été au lycée avec une fille, elle est devenue célèbre en quelques jours seulement. Bon…Étant donné la nature de son milieu, c\'est compréhensible. Sortir du lot dans des films pour adultes est un bon moyen de devenir connu.', 'https://fr.quora.com/Qui-parmi-vos-anciens-camarades-de-classe-vous-a-le-plus-surpris-plus-tard-dans-la-vie-et-pourquoi', '2020-08-28'),
(4, 4, 'Combien d\'heures par jour un informaticien chez Google programme-t-il ?', 'Quand j\'ai rejoint Google il y a environ 6 ans, je passais presque toute mes journées à coder, sauf pendant quelques réunions occasionnelles de 30 minutes. Je n’avais pas réalisé comment j’étais chanceux à l’époque. Aujourd\'hui en tant que manager, mon travail consiste à venir en réunion pour que les autres n\'aient pas à le faire. Il y a des jours où je considère que j\'ai de la chance de coder pendant 2 heures.', 'https://fr.quora.com/Combien-dheures-par-jour-un-informaticien-chez-Google-programme-t-il', '2020-09-14'),
(5, 5, 'Qui sont ou ont été les programmeurs informatiques parmi les plus qualifiés ?', 'Sans conteste, c\'est Gennady Korotkevich. Il est la légende vivante dans le monde du codage compétitif. Il n\'est peut-être pas le fondateur d\'une multinationale évaluée à un milliard de dollars, mais croyez-moi, tous les fondateurs que nous connaissons et dont nous parlons sont très conscients de ce prodige.', 'https://fr.quora.com/Qui-sont-ou-ont-été-les-programmeurs-informatiques-parmi-les-plus-qualifiés', '2020-09-14');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `utilisateur_login` varchar(255) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `utilisateur_login`, `mot_de_passe`) VALUES
(1, 'admin', '$2y$10$kq7.IjXGfqbFxvwMDokzsusY0PT5keYmvVrZMuryV/bbEyc9OcuTK');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sujet_id` (`sujet_id`);

--
-- Index pour la table `membres_forum_discussion`
--
ALTER TABLE `membres_forum_discussion`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `nouvelles`
--
ALTER TABLE `nouvelles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nouvelles_categorie` (`fk_categorie`);

--
-- Index pour la table `sujets`
--
ALTER TABLE `sujets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `auteur_id` (`auteur_id`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT pour la table `membres_forum_discussion`
--
ALTER TABLE `membres_forum_discussion`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `nouvelles`
--
ALTER TABLE `nouvelles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD CONSTRAINT `commentaires_ibfk_1` FOREIGN KEY (`sujet_id`) REFERENCES `sujets` (`id`);

--
-- Contraintes pour la table `nouvelles`
--
ALTER TABLE `nouvelles`
  ADD CONSTRAINT `nouvelles_categorie` FOREIGN KEY (`fk_categorie`) REFERENCES `categories` (`id`);

--
-- Contraintes pour la table `sujets`
--
ALTER TABLE `sujets`
  ADD CONSTRAINT `sujets_ibfk_1` FOREIGN KEY (`auteur_id`) REFERENCES `membres_forum_discussion` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
