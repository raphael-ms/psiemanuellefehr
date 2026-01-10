import { graphql, useStaticQuery } from 'gatsby';

interface TestimonialsSectionQueryResult {
    allTestimonialsJson: {
        sections: {
            button: {
                label: string;
                url: string;
                visible: boolean;
            };
            testimonials: {
                visible: boolean;
                name: string;
                gender: string;
                countryEmoji: string;
                text: string;
            }[]
        }[];
    };
}

export const useLocalDataSource = (): TestimonialsSectionQueryResult => {
    return useStaticQuery(graphql`
        query TestimonialsSectionQuery {
            allTestimonialsJson {
                sections: nodes {
                    testimonials {
                        visible
                        name
                        gender
                        countryEmoji
                        text
                    }
                }
            }
        }
    `);
};
