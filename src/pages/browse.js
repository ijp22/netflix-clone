import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
    // Series and Films
    const { series } = useContent('series');
    const { films } = useContent('films');

    // Slides
    const slides = selectionFilter({ series, films });

    // Pass to browse container
    return <BrowseContainer slides={slides} />;
}
