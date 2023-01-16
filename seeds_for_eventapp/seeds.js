// const mongoose = require("mongoose");

// const data = [
//     {
//         title: "Envisioneer integrated channels",
//         location: "16 Luster Circle",
//         description2:
//             "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
//         description1: "Organic zero tolerance functionalities",
//         date: "2023-07-03",
//         isFeatured: false,
//     },
//     {
//         title: "Optimize user-centric applications",
//         location: "94982 Dovetail Road",
//         description2:
//             "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
//         description1: "Managed bi-directional info-mediaries",
//         date: "2023-04-26",
//         isFeatured: false,
//     },
//     {
//         title: "Reintermediate 24/365 infrastructures",
//         location: "68 Canary Lane",
//         description2:
//             "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
//         description1: "Persistent dedicated algorithm",
//         date: "2023-02-24",
//         isFeatured: false,
//     },
//     {
//         title: "Productize back-end technologies",
//         location: "2872 Mifflin Junction",
//         description2:
//             "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
//         description1: "Horizontal radical emulation",
//         date: "2023-04-28",
//         isFeatured: true,
//     },
//     {
//         title: "Implement transparent architectures",
//         location: "578 Briar Crest Road",
//         description2:
//             "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
//         description1: "Phased mobile matrices",
//         date: "2023-06-04",
//         isFeatured: false,
//     },
//     {
//         title: "Matrix innovative interfaces",
//         location: "7 Mosinee Place",
//         description2:
//             "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
//         description1: "Extended scalable superstructure",
//         date: "2023-09-22",
//         isFeatured: true,
//     },
//     {
//         title: "Target turn-key convergence",
//         location: "856 Marquette Plaza",
//         description2:
//             "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
//         description1: "Diverse client-server strategy",
//         date: "2023-03-04",
//         isFeatured: false,
//     },
//     {
//         title: "E-enable enterprise channels",
//         location: "0583 Elka Lane",
//         description2:
//             "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
//         description1: "Phased background service-desk",
//         date: "2023-08-17",
//         isFeatured: false,
//     },
//     {
//         title: "Architect front-end markets",
//         location: "16 Rieder Crossing",
//         description2:
//             "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
//         description1: "Monitored needs-based orchestration",
//         date: "2023-03-06",
//         isFeatured: true,
//     },
//     {
//         title: "Cultivate cutting-edge paradigms",
//         location: "67730 Kensington Way",
//         description2:
//             "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
//         description1: "Switchable national task-force",
//         date: "2023-08-25",
//         isFeatured: false,
//     },
//     {
//         title: "Unleash innovative initiatives",
//         location: "6 Vahlen Circle",
//         description2:
//             "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
//         description1: "Streamlined responsive data-warehouse",
//         date: "2023-06-07",
//         isFeatured: true,
//     },
//     {
//         title: "Aggregate proactive users",
//         location: "034 Oakridge Plaza",
//         description2:
//             "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
//         description1: "Re-contextualized multimedia framework",
//         date: "2023-08-14",
//         isFeatured: true,
//     },
//     {
//         title: "Monetize open-source relationships",
//         location: "270 Mitchell Point",
//         description2:
//             "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
//         description1: "Fully-configurable homogeneous project",
//         date: "2023-12-28",
//         isFeatured: false,
//     },
//     {
//         title: "Cultivate ubiquitous action-items",
//         location: "5976 Annamark Pass",
//         description2:
//             "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
//         description1: "Right-sized secondary artificial intelligence",
//         date: "2023-08-14",
//         isFeatured: false,
//     },
//     {
//         title: "Monetize intuitive vortals",
//         location: "3270 Village Junction",
//         description2:
//             "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
//         description1: "Realigned value-added policy",
//         date: "2023-09-07",
//         isFeatured: false,
//     },
//     {
//         title: "Redefine holistic vortals",
//         location: "9226 Almo Pass",
//         description2:
//             "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
//         description1: "Mandatory full-range protocol",
//         date: "2023-04-08",
//         isFeatured: false,
//     },
//     {
//         title: "Visualize killer eyeballs",
//         location: "06 Westport Trail",
//         description2:
//             "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
//         description1: "Business-focused empowering open architecture",
//         date: "2023-03-08",
//         isFeatured: false,
//     },
//     {
//         title: "Innovate sexy infomediaries",
//         location: "98819 Towne Center",
//         description2:
//             "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
//         description1: "Business-focused 24/7 customer loyalty",
//         date: "2023-05-17",
//         isFeatured: true,
//     },
//     {
//         title: "Iterate sticky initiatives",
//         location: "211 Harper Circle",
//         description2:
//             "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
//         description1: "Customer-focused background data-warehouse",
//         date: "2023-12-16",
//         isFeatured: false,
//     },
//     {
//         title: "Whiteboard front-end convergence",
//         location: "48538 Schiller Junction",
//         description2:
//             "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
//         description1: "Operative empowering conglomeration",
//         date: "2023-11-11",
//         isFeatured: false,
//     },
// ];

// const randomNames = [
//     {
//         name: "client",
//     },
//     {
//         name: "web",
//     },
//     {
//         name: "designer",
//     },
//     {
//         name: "friends",
//     },
//     {
//         name: "cybersecurity",
//     },
//     {
//         name: "computer",
//     },
//     {
//         name: "party",
//     },
//     {
//         name: "event",
//     },
//     {
//         name: "AI",
//     },
//     {
//         name: "job",
//     },
//     {
//         name: "strategy",
//     },
//     {
//         name: "event",
//     },
//     {
//         name: "concentration",
//     },
//     {
//         name: "mindset",
//     },
//     {
//         name: "motivation",
//     },
//     {
//         name: "data",
//     },
//     {
//         name: "meditation",
//     },
//     {
//         name: "clear-thinking",
//     },
//     {
//         name: "robot",
//     },
//     {
//         name: "Javascript",
//     },
// ];

// // let temp = 0;
// // let jeuDeDonnees= [];
// //         for (let i of data) {
// //             let urlRandomUnsplash = `https://source.unsplash.com/random/400×300/?${randomNames[temp].name}`;
// //             temp++;
// //              jeuDeDonnees.push({
// //                 title: i.title,
// //                 description: i.description1,
// //                 location: i.location,
// //                 date: i.date,
// //                 image: urlRandomUnsplash,
// //                 isFeatured: i.isFeatured,
// //             });
// //         }

// const eventSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     location: { type: String, required: true },
//     date: { type: String, required: true },
//     image: { type: String, required: true },
//     isFeatured: { type: Boolean, required: true },
// });

// export const Event = mongoose.model("Event", eventSchema);

// // mongoose.connect('mongodb+srv://Yasser:MiUhVr5PljsHyIWI@cluster0.3alls8m.mongodb.net/events?retryWrites=true&w=majority', {useNewUrlParser: true}, (error) => {
// //     if(error) {
// //         console.log(error);
// //     } else {

// //         Jeu.create(jeuDeDonnees, (error) => {
// //             if(error) {
// //                 console.log(error);
// //             } else {
// //                 console.log("Données ajoutées avec succès");
// //             }
// //         });
// //     }
// // });

// // const seedMongoDB = async () => {
// //     let client;

// //     try {
// //         client = await connectDatabase();
// //     } catch (error) {
// //         return;
// //     }
// //     try {
// //         let temp = 0;
// //         for (let i of data) {
// //             let urlRandomUnsplash = `https://source.unsplash.com/random/400×300/?${randomNames[temp].name}`;
// //             temp++;
// //             await inserDocument(client, "events", {
// //                 title: i.title,
// //                 description: i.description1,
// //                 location: i.location,
// //                 date: i.date,
// //                 image: urlRandomUnsplash,
// //                 isFeatured: i.isFeatured,
// //             });
// //         }
// //         client.close();
// //     } catch (error) {
// //         return;
// //     }
// // };

// // seedMongoDB();

// // const seedFirebase = () => {
// //     let temp = 0;
// //     for (let i of data) {
// //         let urlRandomUnsplash = `https://source.unsplash.com/random/400×300/?${randomNames[temp].name}`;
// //         temp++;
// //         fetch(
// //             "https://ievent-539dc-default-rtdb.europe-west1.firebasedatabase.app/events.json",
// //             {
// //                 method: "POST",
// //                 body: JSON.stringify({
// //                     title: i.title,
// //                     description: i.description1,
// //                     location: i.location,
// //                     date: i.date,
// //                     image: urlRandomUnsplash,
// //                     isFeatured: i.isFeatured,
// //                 }),
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                 },
// //             }
// //         );
// //     }
// // };

// // seedFirebase();
