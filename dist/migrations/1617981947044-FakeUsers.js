"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeUsers1617981947044 = void 0;
class FakeUsers1617981947044 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
        insert into public.user (username, fullname, email, password, avatar, banner) values ('mwetherburn0', 'Mendie Wetherburn', 'mwetherburn0@army.mil', 'mwetherburn0', 'https://www.abc.net.au/cm/rimage/12012776-3x2-xlarge.jpg?v=2', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('dglassford1', 'Dallon Glassford', 'dglassford1@booking.com', 'dglassford1', 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/09/13/983d2672-d53f-11e9-a556-d14d94601503_image_hires_180604.jpg?itok=VXIvNYkb&v=1568369168', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('moleshunin2', 'Melanie Oleshunin', 'moleshunin2@addtoany.com', 'moleshunin2', 'https://www.abc.net.au/cm/rimage/12012776-3x2-xlarge.jpg?v=2', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('nalbutt3', 'Nickey Albutt', 'nalbutt3@nationalgeographic.com', 'nalbutt3', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('akoomar4', 'Adolphe Koomar', 'akoomar4@pen.io', 'akoomar4', 'https://st.quantrimang.com/photos/image/2020/11/13/Hinh-Anime-Girl-Cute-2.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('caleixo5', 'Chance Aleixo', 'caleixo5@nasa.gov', 'caleixo5', 'https://i.pinimg.com/736x/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('hhalsall6', 'Homerus Halsall', 'hhalsall6@themeforest.net', 'hhalsall6', 'https://st.quantrimang.com/photos/image/2020/11/13/Hinh-Anime-Girl-Cute-2.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('eboise7', 'Efrem Boise', 'eboise7@bizjournals.com', 'eboise7', 'https://st.quantrimang.com/photos/image/2020/11/13/Hinh-Anime-Girl-Cute-2.jpg', 'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('fbenjamin8', 'Fayette Benjamin', 'fbenjamin8@digg.com', 'fbenjamin8', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('hgronno9', 'Hope Gronno', 'hgronno9@quantcast.com', 'hgronno9', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('rdadamoa', 'Rozalin D''Adamo', 'rdadamoa@webs.com', 'rdadamoa', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('cgoodyearb', 'Chadwick Goodyear', 'cgoodyearb@cnn.com', 'cgoodyearb', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('blanstonc', 'Blanch Lanston', 'blanstonc@noaa.gov', 'blanstonc', 'https://www.abc.net.au/cm/rimage/12012776-3x2-xlarge.jpg?v=2', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('lnobrigad', 'Lindsay Nobriga', 'lnobrigad@imdb.com', 'lnobrigad', 'https://i.pinimg.com/736x/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg', 'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('bnoorwoode', 'Bradford Noorwood', 'bnoorwoode@issuu.com', 'bnoorwoode', 'https://i.pinimg.com/736x/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('poverelf', 'Palm Overel', 'poverelf@gov.uk', 'poverelf', 'https://www.abc.net.au/cm/rimage/12012776-3x2-xlarge.jpg?v=2', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('cpelosg', 'Carrissa Pelos', 'cpelosg@buzzfeed.com', 'cpelosg', 'https://i.pinimg.com/736x/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('mpetrasekh', 'Marsh Petrasek', 'mpetrasekh@omniture.com', 'mpetrasekh', 'https://i.pinimg.com/736x/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg', 'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('mmathesi', 'Megan Mathes', 'mmathesi@mac.com', 'mmathesi', 'https://i.pinimg.com/736x/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('bjanickij', 'Brier Janicki', 'bjanickij@wisc.edu', 'bjanickij', 'https://st.quantrimang.com/photos/image/2020/11/13/Hinh-Anime-Girl-Cute-2.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('cfrantzenk', 'Cosimo Frantzen', 'cfrantzenk@nps.gov', 'cfrantzenk', 'https://www.abc.net.au/cm/rimage/12012776-3x2-xlarge.jpg?v=2', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('mbastimanl', 'Maurizia Bastiman', 'mbastimanl@skype.com', 'mbastimanl', 'https://www.abc.net.au/cm/rimage/12012776-3x2-xlarge.jpg?v=2', 'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('lbrentnallm', 'Lin Brentnall', 'lbrentnallm@europa.eu', 'lbrentnallm', 'https://i.pinimg.com/736x/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('ahighmann', 'Amie Highman', 'ahighmann@typepad.com', 'ahighmann', 'https://www.abc.net.au/cm/rimage/12012776-3x2-xlarge.jpg?v=2', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('rhartegano', 'Ruprecht Hartegan', 'rhartegano@usatoday.com', 'rhartegano', 'https://i.pinimg.com/736x/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg', 'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('pbeckmannp', 'Piper Beckmann', 'pbeckmannp@google.es', 'pbeckmannp', 'https://st.quantrimang.com/photos/image/2020/11/13/Hinh-Anime-Girl-Cute-2.jpg', 'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('sjerransq', 'Sherill Jerrans', 'sjerransq@about.me', 'sjerransq', 'https://st.quantrimang.com/photos/image/2020/11/13/Hinh-Anime-Girl-Cute-2.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('rbettensonr', 'Rakel Bettenson', 'rbettensonr@xing.com', 'rbettensonr', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('dgarveys', 'Drusilla Garvey', 'dgarveys@tinyurl.com', 'dgarveys', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('awoodberryt', 'Akim Woodberry', 'awoodberryt@lulu.com', 'awoodberryt', 'https://st.quantrimang.com/photos/image/2020/11/13/Hinh-Anime-Girl-Cute-2.jpg', 'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('mmeasuresu', 'Micky Measures', 'mmeasuresu@bizjournals.com', 'mmeasuresu', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('ktheyerv', 'Kettie Theyer', 'ktheyerv@photobucket.com', 'ktheyerv', 'https://www.abc.net.au/cm/rimage/12012776-3x2-xlarge.jpg?v=2', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('hbockew', 'Holly Bocke', 'hbockew@prnewswire.com', 'hbockew', 'https://st.quantrimang.com/photos/image/2020/11/13/Hinh-Anime-Girl-Cute-2.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('lwilkiex', 'Lynsey Wilkie', 'lwilkiex@wired.com', 'lwilkiex', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('mbourdony', 'Moselle Bourdon', 'mbourdony@disqus.com', 'mbourdony', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('awellandz', 'Aylmer Welland', 'awellandz@imgur.com', 'awellandz', 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/09/13/983d2672-d53f-11e9-a556-d14d94601503_image_hires_180604.jpg?itok=VXIvNYkb&v=1568369168', 'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('kchilds10', 'Kimberley Childs', 'kchilds10@senate.gov', 'kchilds10', 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/09/13/983d2672-d53f-11e9-a556-d14d94601503_image_hires_180604.jpg?itok=VXIvNYkb&v=1568369168', 'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('eabrahamson11', 'Eugenie Abrahamson', 'eabrahamson11@redcross.org', 'eabrahamson11', 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/09/13/983d2672-d53f-11e9-a556-d14d94601503_image_hires_180604.jpg?itok=VXIvNYkb&v=1568369168', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('rmacgorman12', 'Ryun MacGorman', 'rmacgorman12@amazonaws.com', 'rmacgorman12', 'https://st.quantrimang.com/photos/image/2020/11/13/Hinh-Anime-Girl-Cute-2.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('chendin13', 'Carmella Hendin', 'chendin13@discuz.net', 'chendin13', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('rminot14', 'Rocky Minot', 'rminot14@howstuffworks.com', 'rminot14', 'https://i.pinimg.com/736x/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('wcayford15', 'Wini Cayford', 'wcayford15@usgs.gov', 'wcayford15', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('mnewborn16', 'Michel Newborn', 'mnewborn16@constantcontact.com', 'mnewborn16', 'https://www.abc.net.au/cm/rimage/12012776-3x2-xlarge.jpg?v=2', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('ileedes17', 'Isahella Leedes', 'ileedes17@yale.edu', 'ileedes17', 'https://st.quantrimang.com/photos/image/2020/11/13/Hinh-Anime-Girl-Cute-2.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('ndraxford18', 'Nap Draxford', 'ndraxford18@ted.com', 'ndraxford18', 'https://i.pinimg.com/736x/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('mmcjury19', 'Mar McJury', 'mmcjury19@spotify.com', 'mmcjury19', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('asimonato1a', 'Alvis Simonato', 'asimonato1a@berkeley.edu', 'asimonato1a', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('nconti1b', 'Nicoline Conti', 'nconti1b@statcounter.com', 'nconti1b', 'https://i.pinimg.com/736x/c8/bd/a9/c8bda99ff35a1aca879a77d8dfb84dd2.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('lbuggs1c', 'Lionel Buggs', 'lbuggs1c@java.com', 'lbuggs1c', 'https://i.pinimg.com/originals/a4/2a/44/a42a4479c62c774b997cb4eff9ebb319.jpg', 'https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg');
        insert into public.user (username, fullname, email, password, avatar, banner) values ('asearson1d', 'Astra Searson', 'asearson1d@live.com', 'asearson1d', 'https://st.quantrimang.com/photos/image/2020/11/13/Hinh-Anime-Girl-Cute-2.jpg', 'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg');
        `);
        });
    }
    down(_) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.FakeUsers1617981947044 = FakeUsers1617981947044;
//# sourceMappingURL=1617981947044-FakeUsers.js.map