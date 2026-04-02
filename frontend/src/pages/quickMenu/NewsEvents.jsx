import CollectionPage from '../../components/common/CollectionPage';

export default function NewsEvents() {
  return (
    <CollectionPage
      endpoint="/events"
      eyebrow="News & Events"
      title="News & Events"
      subtitle="Seminars, workshops, competitions and departmental events displayed in a cleaner RUET-style portal interface."
      emptyLabel="Browse event highlights and department activity updates."
      infoMode
    />
  );
}
