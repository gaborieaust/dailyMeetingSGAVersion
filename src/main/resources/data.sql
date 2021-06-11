INSERT INTO public.appuser (id, isactive, name) VALUES (1, true, 'Steve');
INSERT INTO public.appuser (id, isactive, name) VALUES (2, true, 'Mike');
INSERT INTO public.appuser (id, isactive, name) VALUES (3, true, 'Dave');
INSERT INTO public.meeting (id, date) VALUES (1, '2021-06-11 15:34:42.000000');
INSERT INTO public.meeting (id, date) VALUES (2, '2021-06-10 10:34:57.000000');
INSERT INTO public.participation (id, speakingduration, appuser_id, meeting_id) VALUES (2, 400, 1, 1);
INSERT INTO public.participation (id, speakingduration, appuser_id, meeting_id) VALUES (1, 600, 1, 1);