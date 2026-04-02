import CollectionPage from '../../components/common/CollectionPage';

export default function Notice() {
  return (
    <CollectionPage
      endpoint="/notices"
      eyebrow="Notice"
      title="Official Notice Board"
      subtitle="Latest departmental notices, circulars and administrative academic updates for students and faculty."
      emptyLabel="Browse official notices and downloadable circular documents."
    />
  );
}
