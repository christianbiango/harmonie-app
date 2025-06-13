INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, invited_at, confirmation_token, confirmation_sent_at, recovery_token, recovery_sent_at, email_change_token_new, email_change, email_change_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, created_at, updated_at, phone, phone_confirmed_at, phone_change, phone_change_token, phone_change_sent_at, email_change_token_current, email_change_confirm_status, banned_until, reauthentication_token, reauthentication_sent_at)
VALUES
  ('00000000-0000-0000-0000-000000000000', 'f1c2d3e4-a5b6-7c8d-9e0f-1a2b3c4d5e6f', 'authenticated', 'authenticated', 'user1@inbucket.org',  extensions.crypt('password', extensions.gen_salt('bf')), timezone('utc'::text, now()), NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, timezone('utc'::text, now()), timezone('utc'::text, now()), NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL),
  ('00000000-0000-0000-0000-000000000000', 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d', 'authenticated', 'authenticated', 'user2@inbucket.org',  extensions.crypt('password', extensions.gen_salt('bf')), timezone('utc'::text, now()), NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, timezone('utc'::text, now()), timezone('utc'::text, now()), NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL),
  ('00000000-0000-0000-0000-000000000000', '513007e2-e556-4fef-9ae0-c11fc6397d41', 'authenticated', 'authenticated', 'user3@inbucket.org',  extensions.crypt('password', extensions.gen_salt('bf')), timezone('utc'::text, now()), NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, timezone('utc'::text, now()), timezone('utc'::text, now()), NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL);

---

INSERT INTO auth.identities (id,provider_id,user_id,identity_data,provider,last_sign_in_at,created_at,updated_at)
VALUES
  ('f1c2d3e4-a5b6-7c8d-9e0f-1a2b3c4d5e6f', 'f1c2d3e4-a5b6-7c8d-9e0f-1a2b3c4d5e6e','f1c2d3e4-a5b6-7c8d-9e0f-1a2b3c4d5e6f'::uuid, '{"sub": "f1c2d3e4-a5b6-7c8d-9e0f-1a2b3c4d5e6f"}', 'email', timezone('utc'::text, now()), timezone('utc'::text, now()), timezone('utc'::text, now())),
  ('a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d', 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6c','a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d'::uuid, '{"sub": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d"}', 'email', timezone('utc'::text, now()), timezone('utc'::text, now()), timezone('utc'::text, now())),
  ('513007e2-e556-4fef-9ae0-c11fc6397d41', 'x1y2z3a4-b5c6-d7e8-f9g0-h1i2j3k4l5m5','513007e2-e556-4fef-9ae0-c11fc6397d41'::uuid, '{"sub": "513007e2-e556-4fef-9ae0-c11fc6397d41"}', 'email', timezone('utc'::text, now()), timezone('utc'::text, now()), timezone('utc'::text, now()));

  SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.8
-- Dumped by pg_dump version 15.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '4fb03d2b-2c49-4a7c-a6f1-e38a1cf4748e', '{"action":"login","actor_id":"5899f99d-a449-4bfa-8769-19c097aaf1f5","actor_username":"develop@inbucket.org","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-01 14:00:39.531322+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."cities" ("id", "created_at", "name") VALUES
	('ccc10518-5190-511c-bc7b-55b1ea3b6634', '2025-06-01 14:19:39.540724+00', 'Fort Tatum'),
	('3fe92dd6-8c85-5cfd-b844-d72bcda9e9ca', '2025-06-01 14:19:39.540724+00', 'Fort Tatum'),
	('ac485f37-ea33-5355-92fc-709294f2c14a', '2025-06-01 14:19:39.540724+00', 'Fort Tatum'),
	('300b22f4-ca1a-586b-91a6-4922b5c6db8e', '2025-06-01 14:19:39.540724+00', 'Fort Tatum'),
	('1bf9d80c-3f5a-58d9-9187-fbec1858d480', '2025-06-01 14:19:39.540724+00', 'Fort Tatum'),
	('e24eabcf-472a-5468-ac9e-807c1ed9640d', '2025-06-01 14:19:39.540724+00', 'Fort Tatum'),
	('947ce98e-3295-5bd0-a0be-3799478d1c6c', '2025-06-01 14:19:39.540724+00', 'Fort Tatum'),
	('35f8b31a-d005-534d-8e52-3eb9b89d9ff0', '2025-06-01 14:19:39.540724+00', 'Fort Tatum'),
	('70ce3682-eb4c-51f9-a7b1-51bcbb388943', '2025-06-01 14:19:39.540724+00', 'Fort Tatum'),
	('13dba983-adb2-5173-923a-455ed92dbad4', '2025-06-01 14:19:39.540724+00', 'Fort Tatum'),
	('3c169449-f6de-5807-b066-0592b6c8d2a5', '2025-06-01 14:19:39.70237+00', 'Partemper incidia saepe de non magna quia el, ant possunt solum depravatio referruisset.'),
	('721d542a-0d4d-5e18-a53d-adec89d51a8e', '2025-06-01 14:19:39.70237+00', 'Sed clarore manus sic quae e qui as, rerum factorem et formidant esse.'),
	('c3e877be-6a59-5905-a19b-bb604bcba6f2', '2025-06-01 14:19:39.70237+00', 'Voluptati es quos neque ime consecuti.'),
	('43d9acc7-5531-5dc0-b469-b34f3aafe9fc', '2025-06-01 14:19:39.70237+00', 'Albam nos honesse vivere non huic, et potionem illum sed saepe.'),
	('33fc65c5-2e8d-52e6-97e1-aef9e31e363e', '2025-06-01 14:19:39.70237+00', 'Dici afferenim non capti fuisse hostempertin per numquam.'),
	('616d1a7f-103d-53cd-aed6-d503c028243f', '2025-06-01 14:19:39.70237+00', 'Itate voluptatem privat autem de uti, mentit voluptas fastidium repelego has.'),
	('e561ddcf-6bc1-5348-b6f7-1687b9ecdc1d', '2025-06-01 14:19:39.70237+00', 'Unda nam dolorem homin quae notionis nomin nos.'),
	('1fed952d-0199-5aec-ac18-cf3e4d378c34', '2025-06-01 14:19:39.70237+00', 'Quantaque cum ferationem nec quae.'),
	('e88f0033-ca20-5a18-aff7-f749e070d543', '2025-06-01 14:19:39.70237+00', 'Inquam et vel minus invitation qua se, atur eo legerire modi ob quod.'),
	('efd57496-1095-582d-9b8d-5dd227890b6b', '2025-06-01 14:19:39.70237+00', 'Bonissentien hoc putare molesse deinde esset vivi possumus, quam meque hoc iucunum quod.'),
	('11be5a8e-f815-5d32-8645-8e962999d376', '2025-06-01 14:19:39.70237+00', 'Multis rerum es igendam dolerrorib statuam, non horreant praeteratem nec mors.'),
	('c7bbaff8-4fd0-5b55-9313-3863b454c7a8', '2025-06-01 14:19:39.70237+00', 'Perii ex quia inius gaudemus est.'),
	('05ae8973-c53c-55ca-b8fe-cdaced1f8da9', '2025-06-01 14:19:39.70237+00', 'Semperitur scaevolum quod munerenim athenis, em seiunctum factis de naturus in quieti.'),
	('0846e4ac-6395-529d-aa7e-f47a5198eb1d', '2025-06-01 14:19:39.70237+00', 'Sapiendum utam patrioque collegendam inum sit, malo non desere nihillustrib quae aiebatque vel.'),
	('9305b1e5-f615-519a-875b-994e5bc7b3cc', '2025-06-01 14:19:39.70237+00', 'Id audaccur factis it perita facillum placeat bonis, hoc inquam te epicitaq ut cogitat.'),
	('00e85da5-6511-58ff-a450-5ed9c69b6011', '2025-06-01 14:19:39.70237+00', 'Nec solum civium quaeque cum philositar.'),
	('455d4fd3-1b79-57ed-99ce-1cc5b79e2f02', '2025-06-01 14:19:39.70237+00', 'Et modum per inanime aut eitam potestiae tot, quas malum nam fieri qua.'),
	('21c99043-ba33-5564-a4ca-0ad2e461faff', '2025-06-01 14:19:39.70237+00', 'Non alitur sequatur non semelli motum studios cum, quidem ter natur ocritud solum noster.'),
	('e4996346-d408-5ee3-adeb-ab0b47586236', '2025-06-01 14:19:39.70237+00', 'Sunt indus beatus triarius quid causa.'),
	('0fb08c9c-f303-5e03-9b3e-04a1799962ce', '2025-06-01 14:19:39.70237+00', 'Adiuvetiam stabilis sequimurae prorsuscipit indivellas disciplinae, explenior sic si proptercapti idere quam.'),
	('d84f2c23-9238-5afa-bd5e-c80ca75ebb93', '2025-06-01 14:19:39.70237+00', 'Utilla nam videamus se quiddam.'),
	('979c61f0-f816-5100-aab3-b44d5d9537cc', '2025-06-01 14:19:39.70237+00', 'Natura dixis cumque latinquam et.'),
	('3ec80322-d4bd-5add-9a22-1cccc946f596', '2025-06-01 14:19:39.70237+00', 'Lucifugien fuit quaerenimus sint bonisti potuimuri.'),
	('1f2e2705-9545-5643-946f-375887d80e96', '2025-06-01 14:19:39.70237+00', 'Ferationem scriben dedita de mutant dolorest, intellegim in mortemperin splendido corportuno causa quae quosvis.'),
	('73a706bc-7490-5bd1-a1d0-3bd78a878837', '2025-06-01 14:19:39.70237+00', 'Ignorantiam quaerim posidium cum de, e probis vero in sed ei.'),
	('69849597-4f6d-5906-89a8-80e98d3eb237', '2025-06-01 14:19:39.70237+00', 'Et poetis solis et quidem.'),
	('405980a4-4e3a-5000-a48d-0520e3facf7f', '2025-06-01 14:19:39.70237+00', 'Dolore vel locus illa divinamur.'),
	('2526176d-585b-5c90-ada3-8b846a79ca83', '2025-06-01 14:19:39.70237+00', 'Cere praeterritud igitia abunt es declinguam cum sapiens.'),
	('2e9bd1ca-3c78-56f2-8e4a-9ef822920114', '2025-06-01 14:19:39.70237+00', 'Sciscat defenimam minusdam homin me, maiorest praeda et civium quae.'),
	('05927807-d120-5527-a18b-00db275fdcc3', '2025-06-01 14:19:39.70237+00', 'Quod am possit et stulti.'),
	('46ec3fbf-b09e-58ae-b554-b3d3142359d6', '2025-06-01 14:19:39.70237+00', 'Sit domincompos bono disputem est singulos id, memor ex quis litterest malorat.'),
	('999e21ff-befa-5f94-97aa-ae07524f39d3', '2025-06-01 14:19:39.70237+00', 'Queo tum dolor brutus metrodore ernum, id iucuntur non am a quodsi quod quamquam.'),
	('f2ad82b3-d070-5303-ba62-e93a2c52c3d6', '2025-06-01 14:19:39.70237+00', 'Esse censet vero ocritum autemque, epicumen versarius ut doloratten sapiendi se civium.'),
	('ebe4b81b-d951-5bdc-ae1a-b6cbfbd6007f', '2025-06-01 14:19:39.70237+00', 'Causa et attenebim medium is idcircum lucilesse ut.'),
	('dedcfd0a-cfbe-5fe2-95fd-abe79e40e534', '2025-06-01 14:19:39.70237+00', 'Corpore fere suavitur malum si nisi rationem, non talibus hoc habeatur me venirriden tantum.'),
	('500f7725-cf50-5e5f-a6b3-323f477e6809', '2025-06-01 14:19:39.70237+00', 'Ipsa voluptas quo scripta voluptatio utrum pariendam suavitaque.'),
	('ff435eb9-39d8-5840-b0f6-a22f54500909', '2025-06-01 14:19:39.70237+00', 'Quam ut suavit nisi seiunctum, nec quid litteram veniam ea temere voluptas autem.'),
	('1da35553-b223-55b8-9864-5ce445087431', '2025-06-01 14:19:39.70237+00', 'Eos a fingituri desid chaere invidentur quae plurimicur.'),
	('7b4c9664-f561-51f5-9ca8-1cca47780a8e', '2025-06-01 14:19:39.70237+00', 'Ulum rationemque omnisi eodem ab a.'),
	('e26a0c73-5ddf-58a4-a83b-4eb18e112cf6', '2025-06-01 14:19:39.70237+00', 'Quae plusque est inem at, lendus magna ocultim laudatio liberet asperciper non expetenim.');


--
-- Data for Name: holidays_offers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."holidays_offers" ("created_at", "name", "address", "postal_code", "description", "max_people", "rooms", "host_type", "equipments", "id", "id_cities") VALUES
	('2025-06-01 14:19:39.544533+00', 'audeo crastinus decerno', '309 Barbara Spurs', '29988-3733', 'Aegre vero spectaculum. Corona cogito acidus avaritia cuius. Quidem beatus triduana arbor auctus cubo teres.', 7, 1, 'hotel', '["ac"]', 1, NULL),
	('2025-06-01 14:19:39.544533+00', 'audeo crastinus decerno', '309 Barbara Spurs', '29988-3733', 'Aegre vero spectaculum. Corona cogito acidus avaritia cuius. Quidem beatus triduana arbor auctus cubo teres.', 7, 1, 'hotel', '["ac"]', 2, NULL),
	('2025-06-01 14:19:39.561269+00', 'Et dis quae non malorteat enim.', 'Et habeat sit tranquillitter quam hosti p putatibus.', 'Fieri quod nec me autem nam anime nisi, ine omnisi quae tur mutatasper.', 'Sed atque omni omnino natur quae, cum ad sit dicit positur.', 35575, 42174, 'Hae fuisse natur obiecta naturaliae est efficii iri.', 'Capteturi ut difficiat quem corrigeran ipsa, dubit scribi qua finitasper sublate pectam.', 3, NULL),
	('2025-06-01 14:19:39.561269+00', 'Im voluptates aut ex quod probabo quas utante.', 'Retinsatis et cum theseo sunt ceteris potest.', 'Non tamque atum fieri epiculen in cognitiae etiamsi, posse quisitassen multo nec ulis noctes.', 'Et agatque et nostra ipsa il.', 26298, 29492, 'Quid referum comprehentur ius dici.', 'Sent molesse quarum de sola si delicur hoc, sent laborum dolore ut iudici nec sunt.', 4, NULL);


--
-- Data for Name: doctors; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."doctors" ("id", "created_at", "name", "id_holidays_offers") VALUES
	('d726a27b-164e-51f9-9a97-8d6461d7dbad', '2025-06-01 14:19:39.553902+00', 'bro', 2),
	('eabdfa83-7d66-5e4e-8c0d-6c61e63f01af', '2025-06-01 14:19:39.553902+00', 'bro', 2),
	('27fcfd9b-2310-585a-ad25-21cb859ef001', '2025-06-01 14:19:39.703637+00', 'Eque auditia es sit quae.', NULL),
	('1ed41b5d-c40f-52e1-ad7e-27dbfd9aa72e', '2025-06-01 14:19:39.703637+00', 'Dolorum etur fieri eo dicatur nisi quorum, pluribus ex sapiendore nihille cum solet eram.', NULL),
	('c23e9809-f77f-5f55-bab1-44988ef4db03', '2025-06-01 14:19:39.703637+00', 'Deserant optime praetere atque formidin reicientia depravattul.', NULL),
	('838bb2e2-358d-5d8a-bdbf-bee535655d4e', '2025-06-01 14:19:39.703637+00', 'Sunt ipsas quibus endum inamicur cumque propriae, et stoicis efficiantur idua et progredientiam quod fingi.', NULL),
	('a4953f69-db4b-51d2-aabf-2458b558eb44', '2025-06-01 14:19:39.703637+00', 'Dictum sed pariunt enimus et qui melius, discedenim ter quid idita fortitia depravatus natum platonem.', NULL),
	('a47bb6b6-62ea-5054-aeef-35f14fff6fe6', '2025-06-01 14:19:39.703637+00', 'Ratio corporis et honest brevitat causa.', NULL),
	('e9ff2ed4-2b38-5e72-9887-41230053cd1c', '2025-06-01 14:19:39.703637+00', 'Expetum cum voluptatem quodsi vita.', NULL),
	('f9058a70-1be1-544e-994d-38a6f6ea091b', '2025-06-01 14:19:39.703637+00', 'Sint inproboris er nihil rescerta es nam, afferrenov ac ius esse ut sine sic us.', NULL),
	('a8a9ed56-3ad6-50c4-87a2-d2463edd938a', '2025-06-01 14:19:39.703637+00', 'Fecis nec autem iis inimproban convenire minime studium.', NULL),
	('22155513-8102-5b2e-8e7b-9ab1475ace96', '2025-06-01 14:19:39.703637+00', 'Expetendum futur aut guberiri igantes it voluptatib, discipitur concurri timum voluptata illum.', NULL),
	('a8789605-50f3-5f71-ae4a-acf1b1bd605c', '2025-06-01 14:19:39.703637+00', 'Futur id idina rutillis debile.', NULL),
	('b6cbcc88-bf99-5430-8d3b-61f64ff8b65d', '2025-06-01 14:19:39.703637+00', 'Splendidissius bonas per quantum huc pugnari, quorum bene si greges cum bene sectet.', NULL),
	('d4abc181-a133-5aa6-bcb4-41c19fc917ab', '2025-06-01 14:19:39.703637+00', 'Sapientia quid iis ut causa quaeratas est voluptate.', NULL),
	('143c328c-db7d-5906-b398-a6504f0b9a73', '2025-06-01 14:19:39.703637+00', 'Neque qui necest democriti um quod mensae, eli adipsi ine adverbis civium quod.', NULL),
	('29439502-aca6-594d-88e8-ab71e120800e', '2025-06-01 14:19:39.703637+00', 'Opere ei esse has parta advertatem acuti vera, etur atius is easque putendus util animpermul.', NULL),
	('4f1f50b6-1ff3-588a-8863-2ef974921478', '2025-06-01 14:19:39.703637+00', 'Idita homint eturi appeterga simum lucifugi in.', NULL),
	('86d2fc20-eb45-5703-ab4d-150e7f87ca79', '2025-06-01 14:19:39.703637+00', 'Omnescio desisti contem perpetender ad modum propteris.', NULL),
	('d755f198-399b-5bd9-86c6-e70bd8f45df4', '2025-06-01 14:19:39.703637+00', 'Nobisse animus idita haec vexet laboratum et.', NULL),
	('06218014-6f79-529f-8661-370ea58b74c2', '2025-06-01 14:19:39.703637+00', 'Terum poetarum sequat vel curationes nullo dolorum medium, suapte paene et legam tale etiam.', NULL),
	('170b52ec-2732-5e1c-9a19-1720abd5d3ba', '2025-06-01 14:19:39.703637+00', 'Natur rem legi est si habeat fore, sic metu eosdem saepe intellegen iis virtutibus.', NULL),
	('419f5763-5466-55ec-9b92-2c8d81f565a1', '2025-06-01 14:19:39.703637+00', 'Rerum ut labore quae et, vocet in hominerun non totum.', NULL),
	('c0438500-f6c0-54bc-adc8-82bae5e63f0d', '2025-06-01 14:19:39.703637+00', 'Quo neque eum potest hunc iisque.', NULL),
	('8be96dbd-abe7-524b-aebd-72f695f9dbbc', '2025-06-01 14:19:39.703637+00', 'Efac perspici propter dolor arum quibus.', NULL),
	('2e5f4590-33c2-5bb2-9f23-9f8d4d8a35fc', '2025-06-01 14:19:39.703637+00', 'Quis nec sunt res ex delectute ina.', NULL),
	('27d7d331-5fae-5bf6-bfb3-43f4d050daf7', '2025-06-01 14:19:39.703637+00', 'Quid multa in non forte menandis.', NULL),
	('339c5713-3302-58d4-8f94-3a6ba25e3ba9', '2025-06-01 14:19:39.703637+00', 'Ponatomne et nulla audiri haec cum.', NULL),
	('8ad85193-a285-56d8-8688-355b36ee5e89', '2025-06-01 14:19:39.703637+00', 'Beatus suis igentibiq se quidem, igitere eo sed arbitraret non ophia quadamputas.', NULL),
	('91935a02-4ff0-5104-8dad-89d4a7476705', '2025-06-01 14:19:39.703637+00', 'Aiebaturus incia recteque voluptatib flagit.', NULL),
	('d6ad8f03-c248-5aad-b37a-91e47a969c66', '2025-06-01 14:19:39.703637+00', 'Qui ut male horum una patero essarum, quid deterne sed neces tantamendam am diis.', NULL),
	('5f2406f8-def9-55f1-afb1-424aa61288cb', '2025-06-01 14:19:39.703637+00', 'Ipso laetet sole expetu quae qua sunt a, animpore ad consequat quoque ano natura disputatom probis.', NULL),
	('44cfd3a0-bfdf-5a67-a987-36eccc0c5306', '2025-06-01 14:19:39.703637+00', 'Admiraren ophiae cordans a leniat, dolorum voluptatis aperos hic inmorat responti.', NULL),
	('0c09dbbb-a326-5e75-b614-363b339f96f8', '2025-06-01 14:19:39.703637+00', 'Turbatur dis quae autem campum, plus ad adhibuit nos pater.', NULL),
	('0d3d7061-23ce-56ba-aaaf-13ff1c29eb00', '2025-06-01 14:19:39.703637+00', 'Cupio te praetercitus requietisse scaevoluti sit eritaque firmatere.', NULL),
	('679aa8da-ccca-503c-9be9-171a12b065c8', '2025-06-01 14:19:39.703637+00', 'Praesere moda aliosi non afferandae patere faciuntque, esticaret aegritum voluptatem hanc sed ne placuit voluptates.', NULL),
	('6b4e22ac-11ae-5ac9-ac24-3012042c3e9e', '2025-06-01 14:19:39.703637+00', 'Faculsa maiorest reprehentiam quadam illum aut.', NULL),
	('8c8dd782-7283-523b-9534-da368f16429e', '2025-06-01 14:19:39.703637+00', 'Causa iam am texitat mucius sic quod.', NULL),
	('d5a1560a-9016-5a5e-bafa-fd3e303ee68f', '2025-06-01 14:19:39.703637+00', 'Hac libid et velit nota.', NULL),
	('6fda20a7-e8da-5f3e-ac61-dc6901d3df6f', '2025-06-01 14:19:39.703637+00', 'De tam cupidition de andae quibus quod insatis, putat nollem ter quae voluptatem.', NULL),
	('0d266c88-7c29-5481-99e0-d343e9785fe2', '2025-06-01 14:19:39.703637+00', 'Sanos deinde sit detractis voluptatis.', NULL),
	('b0bc823b-769e-5b72-bdfb-53de96d9d631', '2025-06-01 14:19:39.703637+00', 'Qui simosartem epicari licit quibus et quorum ida.', NULL);


--
-- Data for Name: offers_availability; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."offers_availability" ("id", "created_at", "date", "max_people", "available", "id_holidays_offers") VALUES
	(1, '2025-06-01 14:19:39.562397+00', '2026-05-08', 10, false, 3),
	(2, '2025-06-01 14:19:39.562397+00', '2026-05-08', 10, false, 4);


--
-- Data for Name: offers_bookings; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."offers_bookings" ("created_at", "people", "status", "id_doctors", "id_cities") VALUES
	('2025-06-01 14:19:39.707107+00', 3, 'confirmed', '27fcfd9b-2310-585a-ad25-21cb859ef001', '3c169449-f6de-5807-b066-0592b6c8d2a5'),
	('2025-06-01 14:19:39.707107+00', 3, 'confirmed', '1ed41b5d-c40f-52e1-ad7e-27dbfd9aa72e', '721d542a-0d4d-5e18-a53d-adec89d51a8e'),
	('2025-06-01 14:19:39.707107+00', 2, 'cancelled', 'c23e9809-f77f-5f55-bab1-44988ef4db03', 'c3e877be-6a59-5905-a19b-bb604bcba6f2'),
	('2025-06-01 14:19:39.707107+00', 2, 'confirmed', '838bb2e2-358d-5d8a-bdbf-bee535655d4e', '43d9acc7-5531-5dc0-b469-b34f3aafe9fc'),
	('2025-06-01 14:19:39.707107+00', 4, 'cancelled', 'a4953f69-db4b-51d2-aabf-2458b558eb44', '33fc65c5-2e8d-52e6-97e1-aef9e31e363e'),
	('2025-06-01 14:19:39.707107+00', 1, 'pending', 'a47bb6b6-62ea-5054-aeef-35f14fff6fe6', '616d1a7f-103d-53cd-aed6-d503c028243f'),
	('2025-06-01 14:19:39.707107+00', 2, 'pending', 'e9ff2ed4-2b38-5e72-9887-41230053cd1c', 'e561ddcf-6bc1-5348-b6f7-1687b9ecdc1d'),
	('2025-06-01 14:19:39.707107+00', 4, 'cancelled', 'f9058a70-1be1-544e-994d-38a6f6ea091b', '1fed952d-0199-5aec-ac18-cf3e4d378c34'),
	('2025-06-01 14:19:39.707107+00', 3, 'pending', 'a8a9ed56-3ad6-50c4-87a2-d2463edd938a', 'e88f0033-ca20-5a18-aff7-f749e070d543'),
	('2025-06-01 14:19:39.707107+00', 4, 'confirmed', '22155513-8102-5b2e-8e7b-9ab1475ace96', 'efd57496-1095-582d-9b8d-5dd227890b6b'),
	('2025-06-01 14:19:39.707107+00', 1, 'confirmed', 'a8789605-50f3-5f71-ae4a-acf1b1bd605c', '11be5a8e-f815-5d32-8645-8e962999d376'),
	('2025-06-01 14:19:39.707107+00', 2, 'confirmed', 'b6cbcc88-bf99-5430-8d3b-61f64ff8b65d', 'c7bbaff8-4fd0-5b55-9313-3863b454c7a8'),
	('2025-06-01 14:19:39.707107+00', 2, 'pending', 'd4abc181-a133-5aa6-bcb4-41c19fc917ab', '05ae8973-c53c-55ca-b8fe-cdaced1f8da9'),
	('2025-06-01 14:19:39.707107+00', 4, 'pending', '143c328c-db7d-5906-b398-a6504f0b9a73', '0846e4ac-6395-529d-aa7e-f47a5198eb1d'),
	('2025-06-01 14:19:39.707107+00', 4, 'cancelled', '29439502-aca6-594d-88e8-ab71e120800e', '9305b1e5-f615-519a-875b-994e5bc7b3cc'),
	('2025-06-01 14:19:39.707107+00', 2, 'pending', '4f1f50b6-1ff3-588a-8863-2ef974921478', '00e85da5-6511-58ff-a450-5ed9c69b6011'),
	('2025-06-01 14:19:39.707107+00', 1, 'pending', '86d2fc20-eb45-5703-ab4d-150e7f87ca79', '455d4fd3-1b79-57ed-99ce-1cc5b79e2f02'),
	('2025-06-01 14:19:39.707107+00', 1, 'pending', 'd755f198-399b-5bd9-86c6-e70bd8f45df4', '21c99043-ba33-5564-a4ca-0ad2e461faff'),
	('2025-06-01 14:19:39.707107+00', 2, 'pending', '06218014-6f79-529f-8661-370ea58b74c2', 'e4996346-d408-5ee3-adeb-ab0b47586236'),
	('2025-06-01 14:19:39.707107+00', 1, 'pending', '170b52ec-2732-5e1c-9a19-1720abd5d3ba', '0fb08c9c-f303-5e03-9b3e-04a1799962ce'),
	('2025-06-01 14:19:39.707107+00', 3, 'pending', '419f5763-5466-55ec-9b92-2c8d81f565a1', 'd84f2c23-9238-5afa-bd5e-c80ca75ebb93'),
	('2025-06-01 14:19:39.707107+00', 2, 'confirmed', 'c0438500-f6c0-54bc-adc8-82bae5e63f0d', '979c61f0-f816-5100-aab3-b44d5d9537cc'),
	('2025-06-01 14:19:39.707107+00', 1, 'cancelled', '8be96dbd-abe7-524b-aebd-72f695f9dbbc', '3ec80322-d4bd-5add-9a22-1cccc946f596'),
	('2025-06-01 14:19:39.707107+00', 2, 'pending', '2e5f4590-33c2-5bb2-9f23-9f8d4d8a35fc', '1f2e2705-9545-5643-946f-375887d80e96'),
	('2025-06-01 14:19:39.707107+00', 4, 'pending', '27d7d331-5fae-5bf6-bfb3-43f4d050daf7', '73a706bc-7490-5bd1-a1d0-3bd78a878837'),
	('2025-06-01 14:19:39.707107+00', 4, 'confirmed', '339c5713-3302-58d4-8f94-3a6ba25e3ba9', '69849597-4f6d-5906-89a8-80e98d3eb237'),
	('2025-06-01 14:19:39.707107+00', 1, 'confirmed', '8ad85193-a285-56d8-8688-355b36ee5e89', '405980a4-4e3a-5000-a48d-0520e3facf7f'),
	('2025-06-01 14:19:39.707107+00', 1, 'cancelled', '91935a02-4ff0-5104-8dad-89d4a7476705', '2526176d-585b-5c90-ada3-8b846a79ca83'),
	('2025-06-01 14:19:39.707107+00', 4, 'cancelled', 'd6ad8f03-c248-5aad-b37a-91e47a969c66', '2e9bd1ca-3c78-56f2-8e4a-9ef822920114'),
	('2025-06-01 14:19:39.707107+00', 2, 'pending', '5f2406f8-def9-55f1-afb1-424aa61288cb', '05927807-d120-5527-a18b-00db275fdcc3'),
	('2025-06-01 14:19:39.707107+00', 3, 'cancelled', '44cfd3a0-bfdf-5a67-a987-36eccc0c5306', '46ec3fbf-b09e-58ae-b554-b3d3142359d6'),
	('2025-06-01 14:19:39.707107+00', 2, 'pending', '0c09dbbb-a326-5e75-b614-363b339f96f8', '999e21ff-befa-5f94-97aa-ae07524f39d3'),
	('2025-06-01 14:19:39.707107+00', 1, 'confirmed', '0d3d7061-23ce-56ba-aaaf-13ff1c29eb00', 'f2ad82b3-d070-5303-ba62-e93a2c52c3d6'),
	('2025-06-01 14:19:39.707107+00', 4, 'confirmed', '679aa8da-ccca-503c-9be9-171a12b065c8', 'ebe4b81b-d951-5bdc-ae1a-b6cbfbd6007f'),
	('2025-06-01 14:19:39.707107+00', 1, 'confirmed', '6b4e22ac-11ae-5ac9-ac24-3012042c3e9e', 'dedcfd0a-cfbe-5fe2-95fd-abe79e40e534'),
	('2025-06-01 14:19:39.707107+00', 2, 'pending', '8c8dd782-7283-523b-9534-da368f16429e', '500f7725-cf50-5e5f-a6b3-323f477e6809'),
	('2025-06-01 14:19:39.707107+00', 4, 'cancelled', 'd5a1560a-9016-5a5e-bafa-fd3e303ee68f', 'ff435eb9-39d8-5840-b0f6-a22f54500909'),
	('2025-06-01 14:19:39.707107+00', 1, 'pending', '6fda20a7-e8da-5f3e-ac61-dc6901d3df6f', '1da35553-b223-55b8-9864-5ce445087431'),
	('2025-06-01 14:19:39.707107+00', 1, 'cancelled', '0d266c88-7c29-5481-99e0-d343e9785fe2', '7b4c9664-f561-51f5-9ca8-1cca47780a8e'),
	('2025-06-01 14:19:39.707107+00', 3, 'confirmed', 'b0bc823b-769e-5b72-bdfb-53de96d9d631', 'e26a0c73-5ddf-58a4-a83b-4eb18e112cf6');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: prefixes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, true);


--
-- Name: holidays_offers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."holidays_offers_id_seq"', 4, true);


--
-- Name: offers_availability_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."offers_availability_id_seq"', 2, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
