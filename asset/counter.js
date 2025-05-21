// counter-1565c40a.js


// 
const SUPABASE_URL = 'https://sbvczmythudfntzgofjw.supabase.co';
const SUPABASE_ANON_KEY = ''; // 


// Initialiser Supabase
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


// Fonction pour enregistrer une visite
async function logVisit() {
 const { error } = await supabaseClient.from('VISITS').insert({});
 if (error) {
   console.error('Erreur lors de l\'insertion :', error);
 }
}


// Fonction pour récupérer le nombre total de visites
async function getVisitCount() {
 const { data, error } = await supabaseClient.from('VISITS').select('id', { count: 'exact' });
 if (error) {
   console.error('Erreur lors de la récupération :', error);
   return;
 }
 const count = data.length;
 const counterElement = document.getElementById('visitor-counter');
 if (counterElement) {
   counterElement.textContent = `Nombre de visiteurs : ${count}`;
 }
}


// Lancer les fonctions au chargement
document.addEventListener('DOMContentLoaded', () => {
 logVisit();
 getVisitCount();
});
