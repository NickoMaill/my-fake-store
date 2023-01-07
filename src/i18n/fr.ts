import { ResourceLanguageType } from './types';

export const resources: ResourceLanguageType = {
    category: {
        electronics: 'Techno',
        jewelry: 'Bijoux',
        menClothing: 'Homme',
        womenClothing: 'Femme',
    },
    promotion: {
        homeTitle: 'Profitez de nos promotions du moment',
    },
    Error: {
        commonError: "Une erreur est survenue, essayez de rafraîchir l'application",
        resourcesError: "Une Erreur est survenue pendant le chargement des resources, essayez de rafraîchir l'application",
        getError: "Une erreur est survenue pendant le chargement de vos resources, essayez de rafraîchir l'application",
        postError: "Une erreur est survenue pendant l'envoi de vos donnée, essayez de rafraîchir l'application",
        putError: "Une erreur est survenue pendant la modification de vos données, essayez de rafraîchir l'application",
        deleteError: "Une erreur est survenue pendant la suppression de vos données, essayez de rafraîchir l'application",
    },
    products: {
        filterLabel: 'Trier par',
    },
    common: {
        refresh: 'rafraîchir',
        units: '€',
        back: 'Retour',
    },
};
