insert into appuser (id, isactive,name) values (1,true, 'Michel F');
insert into appuser (id, isactive,name) values (2,true, 'Emile L');
insert into appuser (id, isactive,name) values (3,true, 'Luca M');
insert into appuser (id, isactive,name) values (4,true, 'Marc D');
insert into appuser (id, isactive,name) values (5,true, 'Guy G');
INSERT INTO meeting (id, date) VALUES (1, '2021-07-15 10:34:16.000000');
INSERT INTO meeting (id, date) VALUES (2, '2021-06-09 10:34:27.000000');
INSERT INTO meeting (id, date) VALUES (3, '2021-06-04 10:34:40.000000');
INSERT INTO participation (id, speakingduration, appuser_id, meeting_id) VALUES (1, 70, 1, 1);
INSERT INTO participation (id, speakingduration, appuser_id, meeting_id) VALUES (2, 110, 2, 1);
INSERT INTO participation (id, speakingduration, appuser_id, meeting_id) VALUES (3, 54, 1, 2);
INSERT INTO participation (id, speakingduration, appuser_id, meeting_id) VALUES (4, 12, 3, 2);

